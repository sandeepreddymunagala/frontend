import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
            <span className="text-yellow-400 font-semibold text-sm tracking-wider">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-yellow-400">Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us how we can help you"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-md transition-all duration-300 hover:bg-yellow-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-yellow-400 transition-colors duration-300">
              <div className="w-14 h-14 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 mb-3">Drop us an email anytime</p>
              <a href="mailto:support@studioapp.com" className="text-yellow-400 hover:text-yellow-500 font-semibold">
                support@studiosapp.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-yellow-400 transition-colors duration-300">
              <div className="w-14 h-14 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-400 mb-3">Available Mon-Sat, 9 AM - 7 PM</p>
              <a href="tel:+911234567890" className="text-yellow-400 hover:text-yellow-500 font-semibold">
                +91 123 456 7890
              </a>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-yellow-400 transition-colors duration-300">
              <div className="w-14 h-14 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400 mb-3">Come say hello at our office</p>
              <p className="text-yellow-400 font-semibold">
                123 Tech Park, MG Road,<br />
                Bangalore, Karnataka 560001
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
