import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../assets/logo/SuvidhaLogo.png";
import { 
  FaFacebook, 
  FaTwitter, 
  FaGithub, 
  FaLinkedin, 
  FaInstagram,
  FaMapMarkerAlt,
  FaCertificate,
  FaLink
} from "react-icons/fa";

function Footer() {
  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com", label: "Facebook" },
    { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
    { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" }
  ];

  const certificates = [
    { name: "80G Certificate", path: "/certificates/80g" },
    { name: "12A Certificate", path: "/certificates/12a" },
    { name: "CSR Certificate", path: "/certificates/csr" },
    { name: "Suvidha Darpan Registration", path: "/certificates/darpan" },
    { name: "Suvidha Pan Card", path: "/certificates/pan" }
  ];

  const usefulLinks = [
    { name: "Verify Your Certificate", path: "/verify" },
    { name: "Free Kids Coding BootCamp", path: "/bootcamp" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" }
  ];

  const locations = [
    {
      name: "Nagpur Headquarter",
      address: "Suvidha Foundation, Motghare Bhavan, Ward No. 4, Santnagar, Annamod, Near Water Tank, Khaperkheda, Saoner, Nagpur, Maharashtra, India Pincode - 441102",
      url: "https://goo.gl/maps/example1"
    },
    {
      name: "Hyderabad Headquarter",
      address: "Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad",
      url: "https://goo.gl/maps/example2"
    }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src={mainLogo} 
                className="h-16 mr-3" 
                alt="Suvidha Foundation Logo" 
              />
              
            </Link>
            <p className="text-gray-600 mb-4">
              Empowering communities through education and skill development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Our Locations
            </h3>
            <ul className="space-y-4">
              {locations.map((location, index) => (
                <li key={index}>
                  <a
                    href={location.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    <span className="font-medium block text-gray-800">{location.name}</span>
                    <span className="text-sm">{location.address}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certificates */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <FaCertificate className="mr-2" /> Certificates
            </h3>
            <ul className="space-y-2">
              {certificates.map((cert, index) => (
                <li key={index}>
                  <Link
                    to={cert.path}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {cert.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <FaLink className="mr-2" /> Useful Links
            </h3>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Suvidha Foundation (Suvidha Mahila Mandal). All Rights Reserved.
          </span>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-600 hover:text-primary text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-primary text-sm">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
