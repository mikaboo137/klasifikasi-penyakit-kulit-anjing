import { AlertTriangle, Info, Heart, Bug } from "lucide-react"

const diseases = [
  {
    id: "demodicosis",
    name: "Demodicosis",
    icon: Bug,
    color: "red",
    description: "Penyakit kulit yang disebabkan oleh tungau Demodex canis yang hidup di folikel rambut.",
    symptoms: [
      "Kerontokan rambut berbentuk bulat",
      "Kulit kemerahan dan bersisik",
      "Gatal ringan hingga sedang",
      "Bau tidak sedap pada kulit",
    ],
    causes: ["Sistem imun yang lemah", "Stres atau malnutrisi", "Faktor genetik", "Kondisi lingkungan yang buruk"],
    treatment: [
      "Konsultasi dengan dokter hewan",
      "Pemberian obat antiparasit",
      "Shampoo medis khusus",
      "Perbaikan nutrisi dan lingkungan",
    ],
  },
  {
    id: "dermatitis",
    name: "Dermatitis",
    icon: AlertTriangle,
    color: "orange",
    description: "Peradangan kulit yang dapat disebabkan oleh berbagai faktor seperti alergi, iritasi, atau infeksi.",
    symptoms: [
      "Kulit kemerahan dan bengkak",
      "Gatal yang intens",
      "Lecet atau luka garukan",
      "Kulit kering dan mengelupas",
    ],
    causes: [
      "Reaksi alergi makanan",
      "Alergi lingkungan (debu, serbuk sari)",
      "Kontak dengan bahan kimia",
      "Gigitan serangga atau parasit",
    ],
    treatment: [
      "Identifikasi dan hindari pemicu alergi",
      "Pemberian antihistamin",
      "Krim atau salep anti-inflamasi",
      "Diet eliminasi jika diperlukan",
    ],
  },
  {
    id: "healthy",
    name: "Kulit Sehat",
    icon: Heart,
    color: "green",
    description: "Kondisi kulit normal yang menunjukkan kesehatan yang baik pada anjing.",
    symptoms: [
      "Kulit berwarna pink atau hitam normal",
      "Rambut berkilau dan tidak rontok berlebihan",
      "Tidak ada bau tidak sedap",
      "Tidak ada tanda-tanda gatal atau iritasi",
    ],
    causes: ["Nutrisi yang seimbang", "Perawatan rutin yang baik", "Lingkungan yang bersih", "Sistem imun yang kuat"],
    treatment: [
      "Pertahankan pola makan sehat",
      "Mandi rutin dengan shampoo yang tepat",
      "Grooming teratur",
      "Pemeriksaan kesehatan berkala",
    ],
  },
  {
    id: "ringworm",
    name: "Ringworm",
    icon: Info,
    color: "purple",
    description: "Infeksi jamur pada kulit yang membentuk pola melingkar, bukan disebabkan oleh cacing.",
    symptoms: [
      "Bercak bulat dengan tepi yang jelas",
      "Kerontokan rambut di area terinfeksi",
      "Kulit bersisik dan kering",
      "Dapat menyebar ke area lain",
    ],
    causes: [
      "Infeksi jamur dermatofita",
      "Kontak dengan hewan terinfeksi",
      "Lingkungan yang lembab",
      "Sistem imun yang lemah",
    ],
    treatment: [
      "Obat antijamur topikal",
      "Shampoo antijamur",
      "Obat antijamur oral (kasus berat)",
      "Desinfeksi lingkungan",
    ],
  },
]

const colorClasses = {
  red: {
    bg: "bg-red-50",
    border: "border-red-200",
    icon: "text-red-600",
    iconBg: "bg-red-100",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    icon: "text-orange-600",
    iconBg: "bg-orange-100",
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-200",
    icon: "text-green-600",
    iconBg: "bg-green-100",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    icon: "text-purple-600",
    iconBg: "bg-purple-100",
  },
}

export default function Diseases() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Informasi Penyakit Kulit Anjing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pelajari lebih lanjut tentang berbagai jenis penyakit kulit yang dapat dideteksi oleh sistem kami.
          </p>
        </div>

        <div className="space-y-8">
          {diseases.map((disease) => {
            const colors = colorClasses[disease.color as keyof typeof colorClasses]
            const IconComponent = disease.icon

            return (
              <div key={disease.id} className={`${colors.bg} ${colors.border} border rounded-2xl p-8`}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`${colors.iconBg} w-12 h-12 rounded-full flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{disease.name}</h2>
                    <p className="text-gray-600">{disease.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Gejala</h3>
                    <ul className="space-y-2">
                      {disease.symptoms.map((symptom, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Penyebab</h3>
                    <ul className="space-y-2">
                      {disease.causes.map((cause, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Penanganan</h3>
                    <ul className="space-y-2">
                      {disease.treatment.map((treatment, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {treatment}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
          <div className="text-center">
            <AlertTriangle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Penting untuk Diingat</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Informasi ini hanya untuk referensi dan tidak menggantikan konsultasi dengan dokter hewan profesional.
              Selalu konsultasikan kondisi kesehatan anjing Anda dengan dokter hewan untuk diagnosis dan pengobatan yang
              tepat.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
