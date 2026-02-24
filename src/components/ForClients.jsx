import { Download, Eye, Share2, Lock, Smartphone, Monitor } from 'lucide-react';
import pair from "../assets/Group.png"

export default function ForClients() {
  const features = [
    {
      icon: Eye,
      title: "View Albums",
      description: "Access all your photos and videos in beautiful galleries"
    },
    {
      icon: Download,
      title: "Download Offline",
      description: "Save your favorites for offline viewing anytime"
    },
    {
      icon: Share2,
      title: "Share Moments",
      description: "Easily share special moments with friends and family"
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "Bank-level encryption keeps your memories safe"
    }
  ];

  return (
    <div className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-yellow-400/10 blur-[120px] rounded-full"></div>

            <div className="relative">
              <div className="bg-gradient-to-br from-black to-black border border-yellow-400/30 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Smartphone className="w-6 h-6 text-yellow-400" />
                  <span className="text-gray-300 font-semibold">Mobile App</span>
                </div>

                <img
                  src={pair}
                  alt="Mobile App"
                  className="w-full h-full object-cover rounded-2xl mb-6"
                />

                {/* <div className="grid grid-cols-3 gap-3">
                  <div className="bg-black/60 border border-gray-800 rounded-lg p-3">
                    <img
                      src="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Thumbnail"
                      className="w-full h-16 object-cover rounded"
                    />
                  </div>
                  <div className="bg-black/60 border border-gray-800 rounded-lg p-3">
                    <img
                      src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Thumbnail"
                      className="w-full h-16 object-cover rounded"
                    />
                  </div>
                  <div className="bg-black/60 border border-gray-800 rounded-lg p-3">
                    <img
                      src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Thumbnail"
                      className="w-full h-16 object-cover rounded"
                    />
                  </div>
                </div> */}
              </div>

              {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-400 to-yellow-600 text-black rounded-2xl p-6 shadow-2xl hidden lg:block">
                <Monitor className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">Desktop</div>
                <div className="text-sm opacity-80">View on Web</div>
              </div> */}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <span className="text-yellow-400 font-semibold text-sm tracking-wider">FOR CLIENTS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Access Your<br />
              <span className="text-yellow-400">Memories Anywhere</span>
            </h2>

            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Your personal photo gallery in the cloud. Download, share, and relive your precious moments on any device, anytime.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-xl p-5 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
                >
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-yellow-400 group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-md transition-all duration-300 hover:bg-yellow-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
