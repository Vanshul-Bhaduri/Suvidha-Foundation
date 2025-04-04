import { FaQuoteLeft, FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// 1. Enhanced Testimonial Data Structure
const testimonialsData = {
  sectionTitle: "Testimonials",
  sectionSubtitle: "What people are saying about our charity activities",
  textReviews: [
    {
      id: 1,
      name: "Divina Malfoy",
      image: "src/assets/FeedBack/6.jpg",
      feedback:
        "It was great experience to work in Suvidha Foundation. Team work is very good. They conduct daily meetings to guide how to work, which makes our work easier. Overall it's an amazing organization to learn.",
      role: "Volunteer",
      rating: 5,
    },
    {
      id: 2,
      name: "Aheri Gosh",
      image: "src/assets/FeedBack/5(1).jpg",
      feedback:
        "I'm glad to have worked with the Suvidha Foundation because I am passionate about their message and what they do.",
      role: "Intern",
      rating: 4,
    },
    {
      id: 3,
      name: "Lekhashree H J ",
      image: "src/assets/FeedBack/9.jpg",
      feedback:
        "It was a great experience to working with your NGO.I learned to connect with society and helped the underprivilged section of society.",
      rating: 5,
    },
    {
      id: 4,
      name: "Samrudhi Nawale",
      image: "src/assets/FeedBack/2.jpg",
      feedback:
        " The experience here at Suvidha Foundation was wonderful. I learnt a lot. It was worth it. ",
      rating: 4,
    },
    {
      id: 5,
      name: "Sanjana Tunk",
      image: "src/assets/FeedBack/8.jpg",
      feedback: " It was entirely a new experience and a gained alot from it. ",
      rating: 5,
    },
    // Add more text testimonials here
  ],
  visualReviews: [
    {
      id: 1,
      name: "Hargun Sachdeva",
      image: "src/assets/FeedBack/5.jpg",
      website: "https://example.com",
    },
    {
      id: 2,
      name: "Harshika",
      image: "src/assets/FeedBack/89.jpg",
      website: "https://example.com",
    },
    {
      id: 3,
      name: "Suraj Kumar",
      image: "src/assets/FeedBack/3.jpg",
      website: "https://example.com",
    },
    {
      id: 4,
      name: "Rahul Yadav",
      image: "src/assets/FeedBack/15.jpg",
      website: "https://example.com",
    },
    {
      id: 5,
      name: "Varsha Jain",
      image: "src/assets/FeedBack/28.jpg",
      website: "https://example.com",
    },
    {
      id: 6,
      name: "Priyanka Thole",
      image: "src/assets/FeedBack/84.jpg",
      website: "https://example.com",
    },
    {
      id: 7,
      name: "Ria Saigal",
      image: "src/assets/FeedBack/92.jpg",
      website: "https://example.com",
    },
    {
      id: 8,
      name: "Anushmita Paul",
      image: "src/assets/FeedBack/94.jpg",
      website: "https://example.com",
    },
    {
      id: 9,
      name: "Nidhi Doshi",
      image: "src/assets/FeedBack/104.jpg",
      website: "https://example.com",
    },
    {
      id: 10,
      name: "Ananya Tripatji",
      image: "src/assets/FeedBack/106.jpg",
      website: "https://example.com",
    },
    // Add more visual testimonials here
  ],
};

// 2. Star Rating Component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`text-xl ${
          i <= rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    );
  }
  return <div className="flex mb-2">{stars}</div>;
};

// 3. Enhanced Testimonial Card Component
const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
    <FaQuoteLeft className="text-primary text-3xl mb-4 opacity-20" />
    <div className="flex-grow">
      <p className="text-gray-600 mb-6 italic">"{testimonial.feedback}"</p>
    </div>
    <div className="mt-auto">
      <StarRating rating={testimonial.rating} />
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary"
        />
        <div>
          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  </div>
);

// 4. Enhanced Visual Testimonial Component with Modal
const VisualTestimonial = ({ testimonial }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div
        className="relative group overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white font-medium">{testimonial.name}</span>
        </div>
      </div>

      {/* Modal for enlarged view */}
      {isOpen && (
        <div className="fixed overflow-scroll inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div
            className="relative max-w-4xl w-full bg-white rounded-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white text-3xl hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {testimonial.name}
                </h3>
                {testimonial.website && (
                  <a
                    href={testimonial.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline mb-4 inline-block"
                  >
                    Visit Website
                  </a>
                )}
                <p className="text-gray-600">
                  We appreciate their generous support of our initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// 5. Main Testimonials Section Component
const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h4 className="text-lg text-primary font-semibold">
            {testimonialsData.sectionTitle}
          </h4>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            {testimonialsData.sectionSubtitle}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Text Testimonials Carousel */}
        <div className="mb-16">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper"
          >
            {testimonialsData.textReviews.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Supporters Section */}
        <div className="py-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 relative pb-2">
            Our Valued Supporters
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
          </h3>

          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {testimonialsData.visualReviews.map((testimonial) => (
              <VisualTestimonial
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>

          {/* Mobile Carousel(slide show) View */}
          <div className="md:hidden">
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="supporter-swiper"
            >
              {testimonialsData.visualReviews.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <VisualTestimonial testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="bg-primary hover:bg-amber-500 text-white font-medium py-3 px-8 rounded-full transition-all not-hover:text-amber-500 not-hover:border-amber-800 not-hover:border-2 duration-300 transform hover:-translate-y-1 shadow-lg">
              Join Our Supporters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
