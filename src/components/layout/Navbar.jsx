import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";
import { config } from "../../config/config";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "", path: "/" },
    { name: "Wedding Cards", path: "/products" },
    { name: "Wedding Stationary", path: "/weddingstationary" },
    { name: "Wedding Hamper", path: "/wedhamper" },
    { name: "Digital Invitations", path: "/e-invitations" },
    { name: "Social Videos", path: "/videos" },
    { name: "Collection Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div>
                <img
                  className="w-15 h-12 bg-gradient-to-br from-luxury-white to-luxury-whiterounded  flex items-center justify-center"
                  src="images/gallery/logo.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold text-luxury-navy">
                  {/* {config.businessName} */}
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-luxury-rosegold"
                      : "text-gray-700 hover:text-luxury-gold"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <a
                href={`https://wa.me/${
                  config.whatsapp.number
                }?text=${encodeURIComponent(config.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center ml-10 gap-2 px-4 py-1 bg-gradient-to-r from-luxury-gold to-luxury-rosegold text-white rounded-full hover:shadow-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Order Now</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-700"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? "bg-luxury-blush text-luxury-rosegold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={`https://wa.me/${
                  config.whatsapp.number
                }?text=${encodeURIComponent(config.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 bg-gradient-to-r from-luxury-gold to-luxury-rosegold text-white rounded-md text-center"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
