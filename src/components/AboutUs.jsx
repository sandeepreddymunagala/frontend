import { Target, Users, Shield, Zap } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To revolutionize how photography studios manage and deliver digital content to their clients through secure, accessible cloud storage."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "We put both studios and their clients first, creating solutions that benefit everyone in the photography ecosystem."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Your memories are precious. We use bank-level encryption and enterprise-grade security to keep them safe."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly evolving our platform with cutting-edge technology to provide the best experience for our users."
    }
  ];

  return (
    <div className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
            <span className="text-yellow-400 font-semibold text-sm tracking-wider">ABOUT US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Empowering Studios,<br />
            <span className="text-yellow-400">Delighting Clients</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Studio App was born from a simple idea: make it effortless for photography studios to deliver and manage their clients' precious memories while creating a sustainable recurring revenue stream.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-yellow-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
            >
              <div className="w-14 h-14 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-3xl p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Founded in 2023, Studio App emerged from firsthand experience in the photography industry. We saw studios struggling with outdated delivery methods, clients losing precious memories, and missed opportunities for sustainable business growth.
                </p>
                <p>
                  Today, we serve over 500 photography studios across India, helping them modernize their operations while providing their clients with secure, lifetime access to their memories. Our platform has become the trusted choice for studios looking to enhance their service offerings and build lasting client relationships.
                </p>
                <p>
                  We're more than just a storage solution. We're a partner in your studio's growth, committed to helping you succeed in the digital age while ensuring your clients' memories are preserved forever.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400/20 blur-[100px] rounded-full"></div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Team"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
            <div className="text-5xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-gray-300 font-semibold">Partner Studios</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
            <div className="text-5xl font-bold text-yellow-400 mb-2">50K+</div>
            <div className="text-gray-300 font-semibold">Happy Clients</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
            <div className="text-5xl font-bold text-yellow-400 mb-2">5M+</div>
            <div className="text-gray-300 font-semibold">Photos Stored</div>
          </div>
        </div>
      </div>
    </div>
  );
}
