import { Upload, Brain, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Upload Gambar",
    description:
      "Upload foto kulit anjing yang ingin Anda analisis. Pastikan gambar jelas dan fokus pada area yang bermasalah.",
    details: [
      "Format yang didukung: JPG, PNG, JPEG",
      "Ukuran maksimal: 5MB",
      "Resolusi minimal: 224x224 pixel",
      "Pencahayaan yang baik untuk hasil optimal",
    ],
  },
  {
    icon: Brain,
    title: "Analisis AI",
    description:
      "Sistem AI kami menggunakan model YOLOv8 yang telah dilatih dengan ribuan gambar untuk menganalisis kondisi kulit.",
    details: [
      "Preprocessing gambar otomatis",
      "Deteksi area yang bermasalah",
      "Klasifikasi menggunakan deep learning",
      "Perhitungan tingkat kepercayaan",
    ],
  },
  {
    icon: CheckCircle,
    title: "Hasil Diagnosis",
    description: "Dapatkan hasil diagnosis lengkap dengan tingkat kepercayaan dan rekomendasi langkah selanjutnya.",
    details: [
      "Jenis penyakit yang terdeteksi",
      "Persentase tingkat kepercayaan",
      "Informasi detail tentang kondisi",
      "Saran perawatan awal",
    ],
  },
]

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cara Kerja Sistem</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pelajari bagaimana teknologi AI kami bekerja untuk mendeteksi penyakit kulit anjing dalam 3 langkah
            sederhana.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className={`flex-shrink-0 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-10 h-10 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                </div>

                <div className={`flex-1 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h2>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Technology Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Teknologi yang Digunakan</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">YOLOv8 (You Only Look Once)</h3>
              <p className="text-gray-600 mb-4">
                Model deep learning terbaru yang dirancang khusus untuk deteksi objek real-time dengan akurasi tinggi.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  Kecepatan pemrosesan yang sangat cepat
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  Akurasi deteksi yang tinggi
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  Optimized untuk berbagai ukuran gambar
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Computer Vision</h3>
              <p className="text-gray-600 mb-4">
                Teknologi yang memungkinkan komputer untuk "melihat" dan memahami konten visual dalam gambar.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  Preprocessing gambar otomatis
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  Feature extraction yang canggih
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  Pattern recognition yang akurat
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accuracy Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Tingkat Akurasi Sistem</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Akurasi Keseluruhan</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">92%</div>
              <div className="text-blue-100">Deteksi Demodicosis</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">94%</div>
              <div className="text-blue-100">Deteksi Dermatitis</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">96%</div>
              <div className="text-blue-100">Deteksi Ringworm</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
