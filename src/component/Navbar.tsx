import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/Home" },
    { label: "Projects", path: "/Projects" },
    { label: "About", path: "/About" },
    { label: "Services", path: "/Services" },
    { label: "Contact", path: "/Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/Home" && (location.pathname === "/" || location.pathname === "/Home")) {
      return true;
    }
    return location.pathname.toLowerCase() === path.toLowerCase();
  };

  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-40">
      <div className="w-full px-5 md:px-10 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[18px] overflow-hidden border border-gray-300">
            <img
              className="w-full h-full object-cover"
              src="images/sam.jpeg"
              alt="Emmanuel Samuel"
            />
          </div>
          <span className="font-bold text-gray-900 text-base md:text-lg">
            Emmanuel Samuel
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm md:text-base font-semibold transition ${
                isActive(link.path)
                  ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-0.5"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/Contact"
            className="px-5 py-2.5 bg-black hover:bg-gray-800 text-white text-sm font-semibold rounded-2xl transition"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-800 text-2xl"
            aria-label="Toggle Menu"
          >
            <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-5 space-y-4 w-full">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-base font-bold text-gray-800 hover:text-blue-600 py-1"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/Contact"
              onClick={() => setIsOpen(false)}
              className="block text-center py-3 bg-black text-white text-sm font-semibold rounded-2xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
