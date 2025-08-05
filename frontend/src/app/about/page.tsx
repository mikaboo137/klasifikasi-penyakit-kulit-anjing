import { Users, Target, Award, Zap } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tentang DogSkin AI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami mengembangkan teknologi AI terdepan untuk membantu deteksi dini penyakit kulit pada anjing, memberikan
            solusi cepat dan akurat untuk kesehatan hewan kesayangan Anda.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h2>
            <p className="text-gray-600">
              Menyediakan teknologi AI yang mudah diakses untuk membantu pemilik anjing dalam mendeteksi penyakit kulit
              secara dini, sehingga dapat memberikan perawatan yang tepat waktu.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h2>
            <p className="text-gray-600">
              Menjadi platform terdepan dalam teknologi kesehatan hewan berbasis AI, membantu menciptakan dunia di mana
              setiap hewan mendapatkan perawatan kesehatan yang optimal.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Keunggulan Teknologi Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deteksi Cepat</h3>
              <p className="text-gray-600">
                Analisis gambar dalam hitungan detik menggunakan model YOLOv8 yang telah dioptimalkan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Akurasi Tinggi</h3>
              <p className="text-gray-600">
                Model AI yang telah dilatih dengan ribuan gambar untuk memberikan hasil yang akurat.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mudah Digunakan</h3>
              <p className="text-gray-600">
                Interface yang intuitif dan user-friendly, dapat digunakan oleh siapa saja tanpa keahlian teknis.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Tim Pengembang</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Dr. Ahmad Rizki</h3>
              <p className="text-blue-600 mb-2">AI Engineer</p>
              <p className="text-gray-600 text-sm">Spesialis dalam computer vision dan deep learning</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Dr. Sarah Putri</h3>
              <p className="text-green-600 mb-2">Veterinarian</p>
              <p className="text-gray-600 text-sm">Dokter hewan dengan spesialisasi dermatologi</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Budi Santoso</h3>
              <p className="text-purple-600 mb-2">Full Stack Developer</p>
              <p className="text-gray-600 text-sm">Pengembang aplikasi web dan mobile</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
