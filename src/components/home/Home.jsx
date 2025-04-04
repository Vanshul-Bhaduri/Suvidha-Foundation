import React from 'react';
import { FaLeaf, FaGraduationCap, FaHandsHelping, FaMedkit, FaUtensils, FaUsers ,FaLinkedin} from 'react-icons/fa';
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Collab ,TestimonialsSection}from '../index';

function Home() {
  const awards = [
    { id: 1, src: import.meta.env.BASE_URL + "src/assets/otherImages/Award_1.jpg", alt: "Award 1" },
    { id: 2, src: import.meta.env.BASE_URL + "src/assets/otherImages/Award_2.jpg", alt: "Award 2" },
    { id: 3, src: import.meta.env.BASE_URL + "src/assets/otherImages/ClimateActionAward.png", alt: "Climate Action Award" },
    {id:4, src: import.meta.env.BASE_URL + "src/assets/otherImages/ClimateAction.jpg", alt:"Climate Action"}
    // Add more awards if needed
  ];
  const teamMembers = [
    {
      label: "Shobha Motghare",
      src: "src/assets/otherImages/Shobha_Motghare.jpeg",
      position: "Secretary",
      linkedin: "https://www.linkedin.com/in/shobha-moetghare-0a6a57238/"
    },
    {
      label: "Payal Badhe",
      src: "src/assets/otherImages/Payal_Badhe.jpg",
      position: "President",
      linkedin: "https://www.linkedin.com/in/payal-badhe-531756aa/"
    },
    {
      label: "Bharti Shendre",
      src: "src/assets/otherImages/bharti_Shendre.jpg",
      position: "Treasurer",
      linkedin: ""
    },
    {
      label: "Nilima Kalambe",
      src: "src/assets/otherImages/nilima_kalambe.jpg",
      position: "Advisor",
      linkedin: ""
    },
    // Add more team members as needed
  ];

  const causes = [
    {
      icon: <FaUtensils className="text-3xl mb-4 text-primary" />,
      title: "Healthy Food",
      description: "By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need."
    },
    {
      icon: <FaUsers className="text-3xl mb-4 text-primary" />,
      title: "Social Awareness",
      description: "We provide resources, conduct awareness campaigns, and facilitate access to hygiene facilities, aiming to create a healthier environment."
    },
    {
      icon: <FaLeaf className="text-3xl mb-4 text-primary" />,
      title: "Tree Plantation",
      description: "Through community engagement, we planted thousands of trees, fostering a greener and healthier ecosystem for future generations."
    },
    {
      icon: <FaMedkit className="text-3xl mb-4 text-primary" />,
      title: "Health Care",
      description: "We believe healthcare is a fundamental right, and we work to ensure services are accessible, affordable, and high quality."
    },
    {
      icon: <FaGraduationCap className="text-3xl mb-4 text-primary" />,
      title: "Primary Education",
      description: "By collaborating with communities, we empower children with the knowledge and skills they need for a brighter future."
    },
    {
      icon: <FaHandsHelping className="text-3xl mb-4 text-primary" />,
      title: "Social Care",
      description: "Our programs include counseling, vocational training, and advocacy, with the goal of empowering individuals."
    }
  ];

  const stats = [
    { value: "15+", label: "Countries" },
    { value: "3L+", label: "Volunteers" },
    { value: "1 Cr+", label: "Internship Goal" },
    { value: "54 L+", label: "Trees Planted" }
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Awards Section */}
      <aside className="py-12">
        <div className="relative">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {awards.map((award) => (
              <SwiperSlide key={award.id}>
                <div className="flex justify-center items-center h-64 md:h-80 lg:h-96">
                  <img 
                    src={award.src} 
                    alt={award.alt} 
                    className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </aside>

      {/* About Section */}
      <section className="py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          <div className="lg:w-1/2">
            <img 
              src="src/assets/otherImages/about.jpg" 
              alt="About Suvidha Foundation" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Learn About Us</h2>
            <h3 className="text-xl text-primary mb-6">Suvidha Foundation (Suvidha Mahila Mandal)</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">About</h4>
                <p className="text-gray-600">
                  Suvidha Mahila Mandal, established on September 8, 1995, is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship, and the scope to volunteer.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Mission</h4>
                <p className="text-gray-600">
                  Suvidha Foundation strives to bridge the educational gap by providing access to quality education, particularly for underprivileged children. We aim to empower individuals and communities through social awareness campaigns, healthcare initiatives, and vocational training programs. The foundation actively promotes environmental sustainability through tree plantation drives.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Vision</h4>
                <p className="text-gray-600">
                  Suvidha Foundation envisions a future of equal opportunities, quality education, and a sustainable, healthy environment. Our key activities include scholarships, student internships, mentorship programs, social awareness campaigns, healthcare services, tree plantation drives, and women empowerment initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="py-12 bg-gray-50 rounded-lg mb-12">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Apply For Internship and Mentorship Programs</h3>
          <h4 className="text-xl text-primary mb-6">
            Seize the opportunity to gain invaluable experience and jumpstart your career with an internship that propels you towards success.
          </h4>
          <p className="text-gray-600 mb-8">
            The Suvidha Foundation Internship Program is a unique opportunity for students and recent graduates to gain experience and contribute to the work of Suvidha Foundation. Along with undertaking tasks related to their specific skills, we encourage interns to develop a reputable professional portfolio.
          </p>
          <button className="bg-primary hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-full transition not-hover:text-amber-500 not-hover:border-amber-800 not-hover:border-2 transform hover:-translate-y-1 shadow-lg">
            Apply Here
          </button>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h4 className="text-lg text-primary font-semibold">What We Do?</h4>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">Causes for a Sustainable Future</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center">
                {cause.icon}
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{cause.title}</h3>
                <p className="text-gray-600">{cause.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-black rounded-lg my-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <span className="block text-4xl font-bold mb-2">{stat.value}</span>
              <span className="text-lg">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h4 className="text-lg text-primary font-semibold">Meet Our Team</h4>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">Guys behind our charity activities</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.src} 
                  alt={member.label} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.label}</h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-blue-700"
                  >
                    <FaLinkedin className="mr-2" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
  {/* Collabs */}
  <Collab/>
      
  {/* feedBack */}
  <TestimonialsSection/>
      
    </div>
  );
}

export default Home;