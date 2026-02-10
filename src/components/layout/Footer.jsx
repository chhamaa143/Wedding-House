import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { config } from "../../config/config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-navy text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-14 h-12 flex items-center justify-center">
                <span className="text-xl font-serif font-bold">
                  <img src="images/gallery/logo.png" alt="" />
                </span>
              </div>
              <h2 className="text-2xl font-serif font-bold">
                {/* {config.businessName} */}
              </h2>
            </div>
            <p className="text-gray-300">
              Creating unforgettable memories with premium wedding stationery.
            </p>
            <div className="flex space-x-4">
              <a
                href={config.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-luxury-gold"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={config.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-luxury-gold"
              >
                <Facebook className="w-5 h-5" />
              </a>
              {/* <a
                href={config.social.pinterest}
                target="_blank"  
                rel="noopener noreferrer"
                className="hover:text-luxurty-gold"
              >
                <Pinterest className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-luxury-gold"
                >
                  Wedding Cards
                </Link>
              </li>
              <li>
                <Link
                  to="/e-invitations"
                  className="text-gray-300 hover:text-luxury-gold"
                >
                  E-Invitations
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-luxury-gold"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-luxury-gold"
                >
                  About Us
                </Link>
              </li>
                <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-luxury-gold"
                >
                  Contact Us
                </Link>
              </li>
                 <li>
                <Link
                  to="/hamper"
                  className="text-gray-300 hover:text-luxury-gold"
                >
                 Wedding Stationary
                </Link>
              </li>
                 <li>
                <Link
                  to="/weddingstationary"
                  className="text-gray-300 hover:text-luxury-gold"
                >
                 Wedding Stationary
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Custom Wedding Card Design</li>
              <li className="text-gray-300">Premium Printing Services</li>
              <li className="text-gray-300">Digital E-Invitations</li>
              <li className="text-gray-300">Wedding Stationery Suite</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold" />
                <a
                  href={`tel:${config.phoneNumber}`}
                  className="text-gray-300 hover:text-luxury-gold"
                >
                  {config.phoneNumber}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold" />
                <a
                  href={`mailto:${config.email}`}
                  className="text-gray-300 hover:text-luxury-gold"
                >
                  {config.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-1" />
                <p className="text-gray-300">{config.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} {config.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
