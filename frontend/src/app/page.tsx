"use client"

import type React from "react"

import { useState } from "react"
import axios from "axios"
import { Upload, Camera, AlertCircle, CheckCircle, Info } from "lucide-react"

interface PredictionResult {
  prediction: string
  confidence: number
}

const diseaseInfo = {
  demodicosis: {
    name: "Demodicosis",
    description: "Penyakit kulit yang disebabkan oleh tungau Demodex",
    color: "text-red-600",
  },
  dermatitis: {
    name: "Dermatitis",
    description: "Peradangan kulit yang dapat disebabkan berbagai faktor",
    color: "text-orange-600",
  },
  healthy: {
    name: "Sehat",
    description: "Kulit dalam kondisi normal dan sehat",
    color: "text-green-600",
  },
  ringworm: {
    name: "Ringworm",
    description: "Infeksi jamur pada kulit yang membentuk pola melingkar",
    color: "text-purple-600",
  },
}

export default function Home() {
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [result, setResult] = useState<PredictionResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setError("Please select a valid image file")
        return
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("File size must be less than 5MB")
        return
      }

      setImage(file)
      setPreview(URL.createObjectURL(file))
      setError(null)
      setResult(null)
    }
  }

  const handleSubmit = async () => {
    if (!image) {
      setError("Pilih gambar terlebih dahulu!")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("file", image)

      const response = await axios.post("https://mikaboo-klasifikasi-penyakit.hf.space/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 30000, // 30 second timeout
      })

      setResult(response.data)
    } catch (err) {
      setError("Terjadi kesalahan saat memproses gambar. Silakan coba lagi.")
      console.error("Prediction error:", err)
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setImage(null)
    setPreview(null)
    setResult(null)
    setError(null)
  }

  const getDiseaseInfo = (prediction: string) => {
    const key = prediction.toLowerCase().replace(/\s+/g, "")
    return (
      diseaseInfo[key as keyof typeof diseaseInfo] || {
        name: prediction,
        description: "Informasi tidak tersedia",
        color: "text-gray-600",
      }
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Camera className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Klasifikasi Penyakit Kulit Anjing</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deteksi penyakit kulit anjing menggunakan model AI YOLOv8. Upload foto kulit anjing untuk mendapatkan
            diagnosis otomatis.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <Upload className="w-6 h-6 mr-2 text-blue-600" />
                Upload Gambar
              </h2>

              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                  <input type="file" accept="image/*" onChange={handleChange} className="hidden" id="file-upload" />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                        <Upload className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-gray-700">Klik untuk upload gambar</p>
                        <p className="text-sm text-gray-500">PNG, JPG, JPEG (Max 5MB)</p>
                      </div>
                    </div>
                  </label>
                </div>

                {preview && (
                  <div className="relative">
                    <img
                      src={preview || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full h-64 object-cover rounded-xl shadow-md"
                    />
                    <button
                      onClick={resetForm}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                )}

                {error && (
                  <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    <p className="text-red-700">{error}</p>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={!image || loading}
                  className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Menganalisis...
                    </>
                  ) : (
                    "Analisis Gambar"
                  )}
                </button>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <Info className="w-6 h-6 mr-2 text-green-600" />
                Hasil Analisis
              </h2>

              {result ? (
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Analisis Selesai</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">Diagnosis</span>
                        <span className={`text-lg font-bold ${getDiseaseInfo(result.prediction).color}`}>
                          {getDiseaseInfo(result.prediction).name}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{getDiseaseInfo(result.prediction).description}</p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">Tingkat Kepercayaan</span>
                        <span className="text-lg font-bold text-blue-600">{(result.confidence * 100).toFixed(1)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${result.confidence * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Catatan:</strong> Hasil ini hanya untuk referensi. Konsultasikan dengan dokter hewan untuk
                      diagnosis yang akurat.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">Upload gambar untuk melihat hasil analisis</p>
                </div>
              )}
            </div>
          </div>

          {/* Disease Info Cards */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Jenis Penyakit yang Dapat Dideteksi
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(diseaseInfo).map(([key, info]) => (
                <div key={key} className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                  <h3 className={`font-semibold mb-2 ${info.color}`}>{info.name}</h3>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
