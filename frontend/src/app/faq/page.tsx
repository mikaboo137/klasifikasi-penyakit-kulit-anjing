"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  {
    category: "Umum",
    question: "Apa itu DogSkin AI?",
    answer:
      "DogSkin AI adalah sistem klasifikasi penyakit kulit anjing yang menggunakan teknologi artificial intelligence (AI) dengan model YOLOv8. Sistem ini dapat mendeteksi 4 jenis kondisi kulit: Demodicosis, Dermatitis, kondisi Sehat, dan Ringworm melalui analisis gambar.",
  },
  {
    category: "Umum",
    question: "Seberapa akurat sistem ini?",
    answer:
      "Sistem kami memiliki tingkat akurasi keseluruhan 95%. Secara spesifik: Deteksi Demodicosis 92%, Deteksi Dermatitis 94%, Deteksi Ringworm 96%, dan identifikasi kulit sehat 98%. Namun, hasil ini hanya untuk referensi dan tidak menggantikan diagnosis dokter hewan profesional.",
  },
  {
    category: "Umum",
    question: "Apakah sistem ini gratis?",
    answer:
      "Ya, saat ini sistem DogSkin AI dapat digunakan secara gratis. Kami menyediakan layanan ini untuk membantu pemilik anjing dalam deteksi dini masalah kesehatan kulit hewan peliharaan mereka.",
  },
  {
    category: "Penggunaan",
    question: "Bagaimana cara menggunakan sistem ini?",
    answer:
      "Sangat mudah! Cukup upload foto kulit anjing yang ingin dianalisis, tunggu beberapa detik untuk proses analisis AI, dan Anda akan mendapatkan hasil diagnosis beserta tingkat kepercayaannya. Pastikan foto yang diupload jelas dan fokus pada area yang bermasalah.",
  },
  {
    category: "Penggunaan",
    question: "Format gambar apa saja yang didukung?",
    answer:
      "Sistem kami mendukung format gambar JPG, JPEG, dan PNG dengan ukuran maksimal 5MB. Untuk hasil optimal, gunakan gambar dengan resolusi minimal 224x224 pixel dan pencahayaan yang baik.",
  },
  {
    category: "Penggunaan",
    question: "Berapa lama waktu yang dibutuhkan untuk analisis?",
    answer:
      "Proses analisis biasanya memakan waktu 3-10 detik, tergantung pada ukuran gambar dan koneksi internet Anda. Sistem kami dirancang untuk memberikan hasil yang cepat dan akurat.",
  },
  {
    category: "Penggunaan",
    question: "Bagaimana cara mengambil foto yang baik untuk analisis?",
    answer:
      "Tips untuk foto yang optimal: 1) Pastikan pencahayaan yang cukup, 2) Fokus pada area kulit yang bermasalah, 3) Hindari bayangan atau pantulan, 4) Jaga jarak yang tepat agar detail terlihat jelas, 5) Pastikan anjing dalam posisi tenang saat difoto.",
  },
  {
    category: "Teknis",
    question: "Teknologi apa yang digunakan dalam sistem ini?",
    answer:
      "Kami menggunakan model YOLOv8 (You Only Look Once version 8), yang merupakan algoritma deep learning terbaru untuk deteksi objek real-time. Model ini telah dilatih dengan ribuan gambar penyakit kulit anjing untuk memberikan akurasi yang tinggi.",
  },
  {
    category: "Teknis",
    question: "Apakah data gambar saya aman?",
    answer:
      "Ya, keamanan data Anda adalah prioritas kami. Gambar yang diupload hanya digunakan untuk proses analisis dan tidak disimpan secara permanen di server kami. Kami tidak membagikan data Anda kepada pihak ketiga.",
  },
  {
    category: "Teknis",
    question: "Mengapa hasil analisis kadang berbeda untuk foto yang sama?",
    answer:
      "Perbedaan kecil dalam hasil bisa terjadi karena faktor seperti kualitas gambar, pencahayaan, atau sudut pengambilan foto. Namun, perbedaan signifikan jarang terjadi. Jika Anda mendapat hasil yang sangat berbeda, coba ambil foto baru dengan pencahayaan yang lebih baik.",
  },
  {
    category: "Medis",
    question: "Apakah hasil diagnosis ini bisa menggantikan konsultasi dokter hewan?",
    answer:
      "TIDAK. Hasil dari sistem kami hanya untuk referensi awal dan tidak menggantikan diagnosis profesional dari dokter hewan. Selalu konsultasikan kondisi kesehatan anjing Anda dengan dokter hewan untuk diagnosis yang akurat dan pengobatan yang tepat.",
  },
  {
    category: "Medis",
    question: "Apa yang harus dilakukan setelah mendapat hasil diagnosis?",
    answer:
      "Setelah mendapat hasil, sebaiknya: 1) Catat hasil diagnosis dan tingkat kepercayaannya, 2) Konsultasikan dengan dokter hewan, 3) Jangan langsung memberikan obat tanpa resep dokter, 4) Monitor kondisi kulit anjing secara berkala, 5) Jaga kebersihan dan kesehatan anjing.",
  },
  {
    category: "Medis",
    question: "Bisakah sistem ini mendeteksi penyakit kulit lainnya?",
    answer:
      "Saat ini sistem kami hanya dapat mendeteksi 4 kondisi: Demodicosis, Dermatitis, Ringworm, dan kondisi kulit sehat. Kami terus mengembangkan sistem untuk dapat mendeteksi lebih banyak jenis penyakit kulit di masa depan.",
  },
  {
    category: "Troubleshooting",
    question: "Mengapa gambar saya tidak bisa diupload?",
    answer:
      "Beberapa kemungkinan penyebab: 1) Format file tidak didukung (gunakan JPG, JPEG, atau PNG), 2) Ukuran file terlalu besar (maksimal 5MB), 3) Koneksi internet bermasalah, 4) Browser tidak mendukung fitur upload. Coba refresh halaman dan upload ulang.",
  },
  {
    category: "Troubleshooting",
    question: "Hasil analisis tidak muncul atau error, apa yang harus dilakukan?",
    answer:
      "Jika mengalami error: 1) Refresh halaman dan coba lagi, 2) Pastikan koneksi internet stabil, 3) Coba dengan gambar yang berbeda, 4) Pastikan ukuran dan format gambar sesuai ketentuan, 5) Jika masalah berlanjut, coba akses di lain waktu.",
  },
  {
    category: "Troubleshooting",
    question: "Mengapa tingkat kepercayaan hasil analisis rendah?",
    answer:
      "Tingkat kepercayaan rendah bisa disebabkan oleh: 1) Kualitas gambar yang kurang baik, 2) Pencahayaan yang tidak optimal, 3) Kondisi kulit yang tidak jelas atau ambigu, 4) Gambar terlalu blur atau tidak fokus. Coba ambil foto baru dengan kualitas yang lebih baik.",
  },
]

const categories = ["Semua", "Umum", "Penggunaan", "Teknis", "Medis", "Troubleshooting"]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("Semua")
  const [openItems, setOpenItems] = useState<number[]>([])

  const filteredFAQ = activeCategory === "Semua" ? faqData : faqData.filter((item) => item.category === activeCategory)

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang sistem klasifikasi penyakit kulit anjing kami.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQ.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mt-2">{item.question}</h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
            <HelpCircle className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Masih Ada Pertanyaan?</h2>
            <p className="text-blue-100 mb-6">
              Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi tim kami.
            </p>
            <div className="space-y-2 text-blue-100">
              <p>📧 info@dogskinai.com</p>
              <p>📱 +62 123 456 789</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-yellow-600 text-sm font-bold">!</span>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Penting untuk Diingat</h3>
                <p className="text-yellow-700 text-sm">
                  Sistem DogSkin AI adalah alat bantu untuk deteksi dini dan tidak menggantikan konsultasi dengan dokter
                  hewan profesional. Selalu konsultasikan kondisi kesehatan anjing Anda dengan dokter hewan untuk
                  diagnosis yang akurat dan pengobatan yang tepat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
