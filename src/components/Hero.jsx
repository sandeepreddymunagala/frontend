import { Play, Sparkles } from 'lucide-react';
import heroimg from "../assets/herobg.jpg"

export default function Hero() {
  return (
    <div className="relative min-h-screen mt-0 md:mt-0  flex items-center justify-center overflow-hidden bg-black">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10"></div> */}

      <div className="absolute inset-0 opacity-58">
        <img
          src={heroimg}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        {/* <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="text-yellow-400 w-8 h-8" />
          <span className="text-yellow-400 font-semibold text-lg tracking-wider">STUDIO APP</span>
        </div> */}

        <h1 className=" mt-20 md:mt-0 text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your Memories.<br />
          <span className="text-yellow-400">Secured. Streamed. Forever.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Where your memories meet OTT excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-md overflow-hidden transition-all duration-300 hover:bg-yellow-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Download Client App
            </span>
          </button>

          <button className="px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-md transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:scale-105">
            Download Studio App
          </button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span>Unlimited Storage</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span>Secure Cloud</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span>24/7 Access</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-black z-10"></div>
    </div>
  );
}
