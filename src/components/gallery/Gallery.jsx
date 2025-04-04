import React, { useState }  from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router';

function Gallery() {
  const galleryData = [
    {
      src: "src/assets/otherImages/FreeWorkshop.jpg",
      label: "Free Workshop",
      sublink: "https://drive.google.com/drive/u/0/folders/11DrNvVoYiIlmKUDW2AvsiklJTuIDL3Gk",
      category: "education"
    },
    {
      src: "src/assets/otherImages/BooksDistribution.jpg",
      label: "Books Distribution",
      sublink: "https://drive.google.com/drive/u/0/folders/1FKG4shImI-9JRavKIP-0b-Tp9Hd205VI",
      category: "donation"
    },
    {
      src: "src/assets/otherImages/OnlineEvents.jpg",
      label: "Online Events",
      sublink: "https://drive.google.com/drive/u/0/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms",
      category: "events"
    },
    {
      src: "src/assets/otherImages/ClothesDistribution2.jpg",
      label: "Clothes Distribution",
      sublink: "https://drive.google.com/drive/u/0/folders/1nOFKvOjhWsbfVVPGumOfpLrFe2364_zK",
      category: "donation"
    },
  ];

  const categories = ['all', ...new Set(galleryData.map(item => item.category))];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredData = activeCategory === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-amber-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with animated underline */}
        <div className="text-center mb-16">
          <span className="block px-3 py-1 text-sm font-semibold text-amber-800 bg-amber-100 rounded-full mb-4">
            Our Gallery
          </span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl relative inline-block">
            Moments of Impact
            <span className="absolute bottom-0 left-0 h-1.5 bg-amber-400 w-full transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing the journey of transformation and community impact
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-amber-500 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-amber-50 shadow-sm'
              }`}
            >
              {category === 'all' ? 'All Categories' : category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredData.map((item, index) => (
            <a
              key={index}
              href={item.sublink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <LazyLoadImage
                  src={item.src}
                  alt={item.label}
                  effect="blur"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width="100%"
                  height="100%"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.label}
                </h3>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-amber-100 bg-amber-700/80 rounded-full">
                    View on Google Drive
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"/>
                    </svg>
                  </span>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.71 3.29L3.29 7.71a1 1 0 000 1.41l4.42 4.42a1 1 0 001.41 0l4.42-4.42a1 1 0 000-1.41L9.12 3.29a1 1 0 00-1.41 0z"/>
                  <path d="M20.71 7.71l-4.42-4.42a1 1 0 00-1.41 0L10.46 7.71a1 1 0 000 1.41l4.42 4.42a1 1 0 001.41 0l4.42-4.42a1 1 0 000-1.41z"/>
                  <path d="M7.71 16.29l-4.42 4.42a1 1 0 000 1.41l4.42 4.42a1 1 0 001.41 0l4.42-4.42a1 1 0 000-1.41l-4.42-4.42a1 1 0 00-1.41 0z"/>
                  <path d="M16.29 16.29l-4.42 4.42a1 1 0 000 1.41l4.42 4.42a1 1 0 001.41 0l4.42-4.42a1 1 0 000-1.41l-4.42-4.42a1 1 0 00-1.41 0z"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to see more of our work?
            </h3>
            <p className="text-gray-600 mb-6">
              Explore our complete collection of impactful moments and join our mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/blog"
                className="px-6 py-3 bg-amber-500 text-white font-medium rounded-lg shadow-md hover:bg-amber-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center"
              >
                Events
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </Link>
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform"
                className="px-6 py-3 border border-amber-500 text-amber-600 font-medium rounded-lg shadow-sm hover:bg-amber-50 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex items-center"
              >
                Become a Volunteer
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;