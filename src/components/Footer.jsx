
import {
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  X,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-yellow-600/40 relative overflow-hidden">
      {/* Optional subtle overlay for depth/differentiation (very faint radial gradient) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />

      {/* Main content area */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Column 1 - Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wide text-yellow-400">
              Contact Us
            </h3>
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-yellow-900/30">
                <MessageCircle className="w-6 h-6" /> WhatsApp Chat
              </button>
              <Link to={'/contact'}>
                <button className="w-full bg-gray-900/80 hover:bg-gray-800 border border-yellow-600/60 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                  <Phone className="w-6 h-6" /> Customer Support
                </button>
              </Link>
            </div>
          </div>

          {/* Column 2 - Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wide text-yellow-400">
              Follow Us
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <a
                href="#"
                className="text-3xl text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-3xl text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-3xl text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <Youtube />
              </a>
              <a
                href="#"
                className="text-3xl text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <X />
              </a>
            </div>
          </div>

          {/* Column 3 - Feedback */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wide text-yellow-400">
              Feedback
            </h3>
            <textarea
              placeholder="Share your experience..."
              className="w-full h-32 bg-black/40 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/50 resize-none shadow-inner backdrop-blur-sm"
            />
            <button className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black font-bold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-yellow-900/40">
              Submit Feedback
            </button>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wide text-yellow-400">
              Legal
            </h3>
            <div className="space-y-3 text-gray-300 text-base">
              <Link
                to="/privacy"
                className="block hover:text-yellow-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/about"
                className="block hover:text-yellow-400 transition-colors"
              >
                About StudioApp
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar - slightly darker / different gradient to signal "end" */}
      <div className="bg-gradient-to-t from-[#0a0a0a] to-gray-950 border-t border-yellow-900/30 py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-400">
          <p className="font-medium">© 2025 StudioApp. All rights reserved.</p>
          <p className="mt-2 italic text-yellow-500/80">
            Revolutionizing memory preservation with OTT-style elegance
          </p>
          <p className="mt-3 text-xs text-gray-600">
            Version 1.0 • Memory OTT Vault
          </p>
        </div>
      </div>
    </footer>
  );
}
