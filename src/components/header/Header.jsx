import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import mainLogo from "../../assets/logo/SuvidhaLogo.png";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const eventsDropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (eventsDropdownRef.current && !eventsDropdownRef.current.contains(event.target)) {
        setActiveDropdown(prev => prev === 'events' ? null : prev);
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setActiveDropdown(prev => prev === 'about' ? null : prev);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownItems = {
    events: [
      { name: "Blog", path: "/blog" },
      { name: "Gallery", path: "/gallery" },
      { name: "Up Coming Events", path:"/upcomingevents"}
    ],
    about: [
      { name: "Our Donors", path: "/ourdonors" },
      { name: "What We Do", path: "/aboutus" }
    ]
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={mainLogo} 
              className="h-16 md:h-20" 
              alt="Suvidha Foundation Logo" 
            />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className="text-gray-700 hover:text-amber-500 font-medium transition"
              activeclassname="text-primary font-semibold"
            >
              Home
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className="text-gray-700 hover:text-amber-500 font-medium transition"
              activeclassname="text-primary font-semibold"
            >
              Contact
            </NavLink>

            {/* Events Dropdown */}
            <div className="relative" ref={eventsDropdownRef}>
              <button
                onClick={() => toggleDropdown('events')}
                className="flex items-center text-gray-700 hover:text-amber-500 font-medium transition"
                aria-expanded={activeDropdown === 'events'}
              >
                Events
                {activeDropdown === 'events' ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
              </button>
              
              {activeDropdown === 'events' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {dropdownItems.events.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-amber-500"
                      activeclassname="bg-gray-100 font-medium"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative" ref={aboutDropdownRef}>
              <button
                onClick={() => toggleDropdown('about')}
                className="flex items-center text-gray-700 hover:text-amber-500 font-medium transition"
                aria-expanded={activeDropdown === 'about'}
              >
                About
                {activeDropdown === 'about' ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
              </button>
              
              {activeDropdown === 'about' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {dropdownItems.about.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-amber-500"
                      activeclassname="bg-gray-100 font-medium"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4 ml-4">
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform"
                className="px-4 py-2 bg-primary text-white rounded-full not-hover:text-amber-500 not-hover:border-amber-800 not-hover:border-2 hover:bg-amber-500 transition font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply for Internship
              </Link>
              <Link
                to="/donate"
                className="px-4 py-2 bg-accent not-hover:text-amber-500 not-hover:border-amber-800 not-hover:border-2 text-white rounded-full hover:bg-amber-500 transition font-medium"
              >
                Help Now
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-2 shadow-lg rounded-b-lg">
            <NavLink
              to="/"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
              activeclassname="bg-gray-100 font-medium"
              onClick={closeMenu}
            >
              Home
            </NavLink>
            
            <NavLink
              to="/contact"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
              activeclassname="bg-gray-100 font-medium"
              onClick={closeMenu}
            >
              Contact
            </NavLink>

            {/* Mobile Dropdown - Events */}
            <div className="py-2 px-4" ref={eventsDropdownRef}>
              <button
                onClick={() => toggleDropdown('events')}
                className="flex items-center justify-between w-full text-gray-700"
              >
                Events
                {activeDropdown === 'events' ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              {activeDropdown === 'events' && (
                <div className="pl-4 mt-2 space-y-2">
                  {dropdownItems.events.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="block py-1 text-gray-600 hover:text-primary"
                      activeclassname="text-primary font-medium"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Dropdown - About */}
            <div className="py-2 px-4" ref={aboutDropdownRef}>
              <button
                onClick={() => toggleDropdown('about')}
                className="flex items-center justify-between w-full text-gray-700"
              >
                About
                {activeDropdown === 'about' ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              {activeDropdown === 'about' && (
                <div className="pl-4 mt-2 space-y-2">
                  {dropdownItems.about.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="block py-1 text-gray-600 hover:text-primary"
                      activeclassname="text-primary font-medium"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile CTA Buttons */}
            <div className="mt-4 space-y-2 px-4">
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform"
                className="block w-full text-center px-4 py-2 bg-primary text-white rounded-full hover:bg-amber-500 not-hover:text-amber-500 not-hover:border-amber-800 not-hover:border-2 transition font-medium"
                onClick={closeMenu}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply for Internship
              </Link>
              <Link
                to="/donate"
                className="block w-full text-center px-4 py-2 bg-accent not-hover:text-amber-500 not-hover:border-amber-800 not-hover:border-2 text-white rounded-full hover:bg-amber-500 transition font-medium"
                onClick={closeMenu}
              >
                Help Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;                                                                