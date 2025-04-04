import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Collab() {
  const collabList = [
    {
      name: "GOODERA",
      src: "src/assets/colabImages/Goodera.png"
    },
    {
      name: "O.P Jindal Global University",
      src: "src/assets/colabImages/collab-1.jpg"
    },
    {
      name: "UPES",
      src: "src/assets/colabImages/collab-2.jpg"
    },
    {
      name: "GH Raisoni College",
      src: "src/assets/colabImages/collab-3.jpg"
    },
    {
      name: "MELNICHENKO FOUNDATION",
      src: "src/assets/colabImages/collab-4.png"
    },
    {
      name: "BRICS+",
      src: "src/assets/colabImages/collab-5.png"
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-amber-800 bg-amber-100 rounded-full mb-4">
            Partnerships
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Empowering Change Together
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our valued collaborators in creating social impact
          </p>
        </div>

        {/* Collaborators Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {collabList.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="relative w-full h-32 mb-4">
                <LazyLoadImage
                  src={item.src}
                  alt={item.name}
                  effect="blur"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-center font-medium text-gray-800 group-hover:text-amber-600 transition-colors">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-amber-500 text-amber-600 font-medium rounded-lg hover:bg-amber-50 transition-colors duration-300">
            Become a Collaborator
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Collab;