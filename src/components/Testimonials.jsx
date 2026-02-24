import { Star, Quote } from 'lucide-react';
import { useState } from 'react';
import person1 from "../assets/person1.png"
import person2 from "../assets/person2.png"
import person3 from "../assets/person3.png"
import person4 from "../assets/person4.png"


export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    // {
    //   name: "Rajesh Sharma",
    //   role: "Studio Owner, Pixelz Photography",
    //   image: person1,
    //   quote: "Studio App transformed our business. We've generated over ₹12 lakhs in commission revenue in just 6 months while providing incredible value to our clients.",
    //   rating: 5
    // },
    {
      name: "Vijay Patel",
      role: "Wedding Photographer, Moments Studio",
      image: person2,
      quote: "My clients love having instant access to their wedding photos. The platform is intuitive, secure, and the commission structure is very generous.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Client, Pro Plan User",
      image: person3,
      quote: "Finally, all my family photos in one secure place. I can access them from anywhere and the offline download feature is a lifesaver during travels.",
      rating: 5
    },
    {
      name: " Ananya Reddy",
      role: "Studio Owner, Capture Memories Studio",
      image: person4,
      quote: "The dashboard makes it so easy to manage clients and track earnings. This is the perfect passive income stream for any photography business.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by <span className="text-yellow-400">Thousands</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear from studios and clients who've transformed their photo management experience
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-yellow-400/10 blur-[150px] rounded-full"></div>

          <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-3xl p-12 shadow-2xl">
            <Quote className="w-16 h-16 text-yellow-400/30 mb-6" />

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400 shadow-[0_0_30px_rgba(255,215,0,0.3)]"
                />
              </div>

              <div className="flex-1">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-xl text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonials[activeIndex].quote}"
                </p>

                <div>
                  <div className="text-xl font-bold text-white">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-yellow-400 font-semibold">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-yellow-400 hover:text-black group"
              >
                <svg className="w-6 h-6 text-yellow-400 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-8 h-2 bg-yellow-400'
                        : 'w-2 h-2 bg-gray-700 hover:bg-gray-600'
                    } rounded-full`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-yellow-400 hover:text-black group"
              >
                <svg className="w-6 h-6 text-yellow-400 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
