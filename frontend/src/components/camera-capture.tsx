"use client"

import { useState, useRef, useEffect } from "react"
import { CameraIcon, X } from "lucide-react"

interface CameraCaptureProps {
  onPhotoCapture: (file: File) => void
  onError: (error: string) => void
  onClose: () => void
}

export default function CameraCapture({ onPhotoCapture, onError, onClose }: CameraCaptureProps) {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cleanupRef = useRef<(() => void) | null>(null)

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640, min: 320 },
          height: { ideal: 480, min: 240 },
          facingMode: "environment",
        },
      })

      setStream(mediaStream)
      setVideoReady(false)

      if (videoRef.current) {
        const video = videoRef.current

        video.srcObject = null
        video.width = 640
        video.height = 480
        video.muted = true
        video.playsInline = true

        const handleVideoReady = () => {
          if (video.videoWidth > 0 && video.videoHeight > 0) {
            setVideoReady(true)
          }
        }

        const handleCanPlay = () => {
          handleVideoReady()
          video.play().catch((playError) => {
            console.error("Video play error:", playError)
            if (video.videoWidth === 0) {
              onError("Tidak dapat memulai video. Silakan coba lagi.")
            }
          })
        }

        video.addEventListener("canplay", handleCanPlay, { once: true })

        cleanupRef.current = () => {
          video.removeEventListener("canplay", handleCanPlay)
        }

        video.srcObject = mediaStream

        const timeout = setTimeout(() => {
          // Only set videoReady if video has loaded but state wasn't updated
          if (!videoReady && video.videoWidth > 0 && video.videoHeight > 0) {
            setVideoReady(true)
          }
          // Removed error message since camera works fine even if timeout triggers
        }, 10000)

        const originalCleanup = cleanupRef.current
        cleanupRef.current = () => {
          clearTimeout(timeout)
          if (originalCleanup) originalCleanup()
        }
      }
    } catch (err) {
      onError("Tidak dapat mengakses kamera. Pastikan izin kamera telah diberikan.")
      console.error("Camera error:", err)
    }
  }

  const stopCamera = () => {
    if (cleanupRef.current) {
      cleanupRef.current()
      cleanupRef.current = null
    }

    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
      setStream(null)
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
    setVideoReady(false)
    onClose()
  }

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current
      const video = videoRef.current
      const context = canvas.getContext("2d")

      const width = video.videoWidth > 0 ? video.videoWidth : video.clientWidth || 640
      const height = video.videoHeight > 0 ? video.videoHeight : video.clientHeight || 480

      canvas.width = width
      canvas.height = height

      if (context) {
        context.clearRect(0, 0, width, height)

        try {
          context.drawImage(video, 0, 0, width, height)
          canvas.toBlob(
            (blob) => {
              if (blob) {
                const file = new File([blob], "camera-capture.jpg", { type: "image/jpeg" })
                onPhotoCapture(file)
                stopCamera()
              } else {
                onError("Gagal mengambil foto. Silakan coba lagi.")
              }
            },
            "image/jpeg",
            0.8,
          )
        } catch (drawError) {
          console.error("Canvas draw error:", drawError)
          onError("Gagal mengambil foto. Silakan coba lagi.")
        }
      }
    } else {
      onError("Kamera belum siap. Silakan coba lagi.")
    }
  }

  useEffect(() => {
    startCamera()

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current()
      }
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [])

  return (
    <div className="space-y-4">
      <div className="relative">
        <video
          ref={videoRef}
          playsInline
          muted
          width={640}
          height={480}
          className="w-full h-64 object-cover rounded-xl bg-black"
          style={{ minHeight: "256px" }}
        />
        <button
          onClick={stopCamera}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        {!videoReady && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
              <p className="text-sm">Memuat kamera...</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={capturePhoto}
          disabled={!videoReady}
          className="flex-1 py-3 px-6 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        >
          <CameraIcon className="w-5 h-5 mr-2" />
          Ambil Foto
        </button>
        <button
          onClick={stopCamera}
          className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-xl hover:bg-gray-600 transition-colors"
        >
          Batal
        </button>
      </div>
      <canvas ref={canvasRef} className="hidden" />
    </div>
  )
}
