import {
  UserPlus,
  Users,
  CreditCard,
  Cloud,
  Vault,
  Podcast,
  TvMinimalPlay,
  BookCopy,
  ArrowDownToLine,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Vault,
      number: "01",
      title: "Vault",
      description:
        "A single secure vault for your IDs, documents, and memories — protected with 3-layered security using PINs, OTPs, and instant access where you need it.",
    },
    {
      icon: Podcast,
      number: "02",
      title: "Podcast",
      description:
        "Discover stories, insights, and conversations that align with your interests.Uploaded and managed by our team, every podcast reflects the spirit of the app.",
    },
    {
      icon: TvMinimalPlay,
      number: "03",
      title: "OTT",
      description:
        "Curated and uploaded by our admin team — handpicked films and shows perfect for couples to sit back, relax, and enjoy.",
    },
    {
      icon: BookCopy,
      number: "04",
      title: "E-books",
      description:
        "Our content curators handpick e-books that align with your mood and interests.",
    },
    {
      icon: ArrowDownToLine,
      number: "05",
      title: "Downloads",
      description:
        "Enjoy a free one-time download for select content. Once downloaded, it’s yours forever — safe, simple, and seamless.",
    },
  ];

  return (
    <div className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Features
            {/* <span className="text-yellow-400">Works</span> */}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Secure your essentials. Stream your memories. Enjoy curated content.
            Everything you need, beautifully integrated.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-4 transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] hover:-translate-y-2"
            >
              <div className="absolute top-6 right-6 text-6xl font-bold text-gray-800 group-hover:text-yellow-400/20 transition-colors duration-300">
                {step.number}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-yellow-400 group-hover:text-black transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm  leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
