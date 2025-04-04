import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { 
  FiArrowRight, 
  FiCalendar, 
  FiMail, 
  FiChevronRight,
} from 'react-icons/fi';
import { Link } from 'react-router';

function Blog() {
  const events = [
    {
      label: "Tree Plantation",
      description: "Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet.",
      src: "/src/assets/otherImages/Tree-Plantation.jpg",
      date: "15 Mar 2023"
    },
    {
      label: "Fundraising Events",
      description: "Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community.",
      src: "/src/assets/otherImages/Fundraising.jpg",
      date: "22 Apr 2023"
    },
    {
      label: "Clothes Distribution",
      description: "Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event.",
      src: "/src/assets/otherImages/ClothsDistribution.jpg",
      date: "10 May 2023"
    },
    {
      label: "Women's Day",
      description: "Celebrating the strength, resilience, and achievements of women worldwide on this special Women's Day. Together, let's honor their contributions.",
      src: "/src/assets/otherImages/WomensDay.jpg",
      date: "08 Mar 2023"
    },
    {
      label: "Food Donation",
      description: "Your generous contributions can fill empty plates and bring smiles to those in need. Together, we can create a world where everyone has access to nutritious meals.",
      src: "/src/assets/otherImages/FoodDonation.jpg",
      date: "05 Jun 2023"
    },
    {
      label: "Animal Feeding",
      description: "Join us in providing sustenance and compassion to our furry companions. Together, let's make a positive impact on their lives through our Animal Feeding event.",
      src: "/src/assets/otherImages/Animal-Feeding.jpg",
      date: "18 Jul 2023"
    },
    {
      label: "Sanitary Pads Distribution",
      description: "Breaking barriers and promoting menstrual health with our Sanitary Pad Initiative. Together, let's empower women and ensure access to safe and dignified hygiene.",
      src: "/src/assets/otherImages/SanitaryPads.jpg",
      date: "28 May 2023"
    },
    {
      label: "Free Workshops",
      description: "Discover new skills, ignite your passions, and embrace lifelong learning with our engaging and enriching free workshops.",
      src: "/src/assets/otherImages/FreeWorkshop.jpg",
      date: "12 Aug 2023"
    },
    // ... (other event objects remain the same)
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-amber-800 bg-amber-100 rounded-full mb-4 animate-fade-in">
            Events and Blog
          </span>
          <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl animate-slide-up">
            <span className="relative inline-block">
              Our Charity Events
              <span className="absolute bottom-0 left-0 h-1.5 bg-amber-400 w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </span>
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-600 animate-fade-in delay-100">
            Celebrating our impact together through meaningful initiatives
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 bg-white animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                {event.date}
              </div>
              
              <div className="relative h-64 overflow-hidden">
                <LazyLoadImage
                  src={event.src}
                  alt={event.label}
                  effect="blur"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width="100%"
                  height="100%"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {event.label}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {event.description}
                </p>
                <button className="inline-flex items-center px-4 py-2 bg-amber-500 text-white text-sm font-medium rounded-md shadow-sm hover:bg-amber-600 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                  Learn more
                  <FiChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100">
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-12 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to make a difference?</h2>
              <p className="text-amber-100 mb-6">
                Join our upcoming events or volunteer your time to help us create more impactful moments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-amber-600 font-medium rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  Contact Us
                  <FiMail className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/upcomingevents"
                  className="inline-flex items-center px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-amber-700 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  View Calendar
                  <FiCalendar className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="p-8 sm:p-12 bg-gradient-to-br from-amber-50 to-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for the latest event updates and success stories.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-amber-500 text-white font-medium rounded-lg shadow-sm hover:bg-amber-600 transition-colors duration-300"
                >
                  Subscribe
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx="true" global="true">{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default Blog;