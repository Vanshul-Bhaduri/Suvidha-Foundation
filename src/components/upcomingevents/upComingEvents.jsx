import React from 'react';
import { FiCalendar, FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const UpcomingEvents = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Community Tree Plantation Drive",
      date: "15 June 2023",
      time: "8:00 AM - 12:00 PM",
      location: "Central Park, Mumbai",
      description: "Join us for a green initiative to plant 500 saplings in the city park. Tools and saplings will be provided.",
      image: "/src/assets/otherImages/Tree-Plantation.jpg",
      registerLink: "#"
    },
    {
      id: 2,
      title: "Summer Book Distribution",
      date: "22 June 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Suvidha Foundation HQ",
      description: "Help us distribute educational books and supplies to underprivileged children for the new school year.",
      image: "/src/assets/otherImages/BooksDistribution.jpg",
      registerLink: "#"
    },
    {
      id: 3,
      title: "Women's Health Workshop",
      date: "28 June 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Community Center, Navi Mumbai",
      description: "Free workshop on women's health and hygiene with expert speakers and sanitary product distribution.",
      image: "/src/assets/otherImages/SanitaryPads.jpg",
      registerLink: "#"
    },
    {
      id: 4,
      title: "Animal Feeding Program",
      date: "5 July 2023",
      time: "7:00 AM - 10:00 AM",
      location: "Local Shelter, Thane",
      description: "Volunteer to help feed and care for stray animals in our community shelter.",
      image: "/src/assets/otherImages/Animal-Feeding.jpg",
      registerLink: "#"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-amber-800 bg-amber-100 rounded-full mb-4">
            Get Involved
          </span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Upcoming Events
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in our upcoming initiatives to make a difference
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <LazyLoadImage
                  src={event.image}
                  alt={event.title}
                  effect="blur"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Upcoming
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Event Meta */}
                <div className="space-y-3 mb-5">
                  <div className="flex items-center text-gray-600">
                    <FiCalendar className="text-amber-500 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiClock className="text-amber-500 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiMapPin className="text-amber-500 mr-2" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={event.registerLink}
                  className="inline-flex items-center px-4 py-2 bg-amber-500 text-white text-sm font-medium rounded-md hover:bg-amber-600 transition-colors duration-300"
                >
                  Register Now
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-amber-500 text-amber-600 font-medium rounded-lg hover:bg-amber-50 transition-colors duration-300"
          >
            View All Upcoming Events
            <FiArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;