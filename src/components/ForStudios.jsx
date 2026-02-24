import { TrendingUp, LayoutDashboard, UserCog, Award } from 'lucide-react';
import studio from "../assets/studio.png"

export default function ForStudios() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Earn Commissions",
      description: "Generate passive income with every client subscription you facilitate."
    },
    {
      icon: LayoutDashboard,
      title: "Studio Dashboard",
      description: "Manage all your clients, track earnings, and monitor growth in one place."
    },
    {
      icon: UserCog,
      title: "Easy Client Onboarding",
      description: "Simple invitation system to add clients seamlessly to the platform."
    },
    {
      icon: Award,
      title: "Premium Partner Status",
      description: "Get exclusive features, priority support, and marketing materials."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <span className="text-yellow-400 font-semibold text-sm tracking-wider">FOR STUDIOS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Partner With Us &<br />
              <span className="text-yellow-400">Grow Your Business</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Join hundreds of photo studios earning recurring commissions while providing exceptional value to their clients.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-black/50 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400/5"
                >
                  <benefit.icon className="w-10 h-10 text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-md transition-all duration-300 hover:bg-yellow-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105">
              Become a Partner Studio
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400/20 blur-[100px] rounded-full"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-2xl p-8 shadow-2xl">
              <img
                src={studio}
                alt="Studio Partner"
                className="w-full h-96 object-cover rounded-xl mb-6"
              />

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-black/50 border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">500+</div>
                  <div className="text-sm text-gray-400">Partners</div>
                </div>
                <div className="bg-black/50 border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">50K+</div>
                  <div className="text-sm text-gray-400">Clients</div>
                </div>
                <div className="bg-black/50 border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">98%</div>
                  <div className="text-sm text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
