import React from 'react';
import { FaBook, FaFemale, FaMedkit, FaUtensils, FaTree, FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-router';

function About() {
  const initiatives = [
    {
      icon: <FaLaptopCode className="text-3xl text-blue-500" />,
      title: "STEM Education",
      description: "Providing free coding and science workshops for underprivileged children to prepare them for the digital future.",
      stats: "5,000+ Children Educated"
    },
    {
      icon: <FaFemale className="text-3xl text-pink-500" />,
      title: "Women Empowerment",
      description: "Vocational training and mentorship programs to help women achieve financial independence and leadership roles.",
      stats: "1,200+ Women Trained"
    },
    {
      icon: <FaBook className="text-3xl text-purple-500" />,
      title: "Scholarships",
      description: "Financial aid and educational support for deserving students from underprivileged backgrounds.",
      stats: "200+ Scholarships Awarded"
    },
    {
      icon: <FaUtensils className="text-3xl text-green-500" />,
      title: "Food Distribution",
      description: "Providing nutritious meals to underprivileged communities through our network of community kitchens.",
      stats: "50,000+ Meals Served"
    },
    {
      icon: <FaTree className="text-3xl text-emerald-500" />,
      title: "Tree Plantation",
      description: "Environmental sustainability initiatives including tree plantation drives and eco-awareness programs.",
      stats: "54,000+ Trees Planted"
    },
    {
      icon: <FaMedkit className="text-3xl text-red-500" />,
      title: "Healthcare Initiatives",
      description: "Organizing free medical camps and providing access to affordable healthcare services in rural areas.",
      stats: "100+ Medical Camps"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h4 className="text-lg text-primary font-semibold">Our Initiatives</h4>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">What We Do</h1>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
          At Suvidha Foundation, we're committed to creating sustainable change through multiple initiatives that empower communities.
        </p>
      </div>

      {/* Initiatives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.map((initiative, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                {initiative.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{initiative.title}</h3>
              <p className="text-gray-600 mb-4">{initiative.description}</p>
              <p className="text-sm text-primary font-medium text-center">{initiative.stats}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-yellow-500 text-white rounded-xl p-6">
          <div className="text-3xl font-bold mb-2">15+</div>
          <div className="text-sm uppercase tracking-wider">Countries</div>
        </div>
        <div className="bg-yellow-500 text-white rounded-xl p-6">
          <div className="text-3xl font-bold mb-2">3L+</div>
          <div className="text-sm uppercase tracking-wider">Volunteers</div>
        </div>
        <div className="bg-yellow-500 text-white rounded-xl p-6">
          <div className="text-3xl font-bold mb-2">1Cr+</div>
          <div className=" text-sm uppercase tracking-wider">Internship Goal</div>
        </div>
        <div className="bg-yellow-500 text-white rounded-xl p-6">
          <div className="text-3xl font-bold mb-2">54L+</div>
          <div className="text-sm uppercase tracking-wider">Trees Planted</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Want to support our initiatives?</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/donate"
            className="bg-primary hover:bg-amber-500 text-white not-hover:text-amber-500 not-hover:border-amber-800 not-hover:border-2 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            Donate Now
          </Link>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform"
            className=" hover:bg-amber-500 text-white  not-hover:text-amber-500 not-hover:border-amber-800 not-hover:border-2 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-md"
          >
            Become a Volunteer
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
