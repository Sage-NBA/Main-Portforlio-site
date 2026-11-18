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
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-300">
            <img
              className="w-full h-full object-cover"
              src="images/sam.jpeg"
              alt="Emmanuel Samuel"
            />
          </div>
          <span className="font-bold text-gray-900 text-sm sm:text-base">
            Emmanuel Samuel
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition ${
                isActive(link.path)
                  ? "text-blue-600 font-bold"
                  : "text-gray-600 hover:text-gray-900"
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
            className="px-4 py-2 bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-xl transition"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 text-gray-800 text-xl"
            aria-label="Toggle Menu"
          >
            <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-5 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold text-gray-700 hover:text-blue-600 py-1"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/Contact"
              onClick={() => setIsOpen(false)}
              className="block text-center py-2 bg-gray-900 text-white text-xs font-semibold rounded-xl"
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
