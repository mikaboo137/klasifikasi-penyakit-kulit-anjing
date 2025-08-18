import { Camera } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">DogSkin AI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Sistem klasifikasi penyakit kulit anjing menggunakan teknologi AI terdepan untuk membantu deteksi dini.
            </p>
          </div>

          <div className="md:col-start-4">
            <h3 className="font-semibold mb-4">Informasi</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Sistem AI untuk deteksi penyakit kulit anjing menggunakan teknologi YOLOv8</p>
              <p>Dikembangkan untuk membantu deteksi dini masalah kesehatan kulit</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
