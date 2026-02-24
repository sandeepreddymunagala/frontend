import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", isHash: false },
    { name: "Features", href: "#features", isHash: true },
    { name: "For Studios", href: "#studios", isHash: true },
    { name: "For Clients", href: "#clients", isHash: true },
    { name: "Pricing", href: "#pricing", isHash: true },
    { name: "About Us", href: "/about", isHash: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-lg border-b border-gray-900 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              className="w-8 h-8 
      group-hover:rotate-360 
      transition-transform duration-700 ease-out"
              alt="StudioApp logo"
            />
            <span className="text-xl font-bold text-yellow-400">StudioApp</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) =>
              link.isHash && isHome ? (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ) : link.isHash ? (
                <Link
                  key={index}
                  to={`/${link.href}`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="http://login.studiosapp.in/" target="blank">
              <button className="px-6 cursor-pointer   py-1.5 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-md transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:scale-105">
                Login
              </button>
            </a>

            <Link
              to="/contact"
              className="px-6 py-2.5 bg-yellow-400 text-black font-bold rounded-md transition-all duration-300 hover:bg-yellow-500 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-80 bg-black/98 backdrop-blur-lg border-l border-gray-800 z-50 md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl">
            <div className="flex items-center justify-between px-6 py-6 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <img src={logo} className="w-8 h-8 " />
                {/* <Sparkles className="text-yellow-400 w-6 h-6" /> */}
                <span className="text-lg font-bold text-white">MENU</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-6 space-y-2">
              {navLinks.map((link, index) =>
                link.isHash && isHome ? (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 font-medium py-3 px-4 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : link.isHash ? (
                  <Link
                    key={index}
                    to={`/${link.href}`}
                    className="text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 font-medium py-3 px-4 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 font-medium py-3 px-4 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ),
              )}

              <div className="pt-6 mt-6 border-t border-gray-800">
                <a href="http://login.studiosapp.in/" target="blank">
                  <button className=" cursor-pointer px-6 mb-4 w-full py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-md transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:scale-105">
                    Login
                  </button>
                </a>

                <Link
                  to="/contact"
                  className="block w-full px-6 py-3 bg-yellow-400 text-black font-bold rounded-md transition-all duration-300 hover:bg-yellow-500 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
