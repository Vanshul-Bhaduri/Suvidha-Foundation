import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaExternalLinkAlt,
} from "react-icons/fa";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary" />,
      title: "Our Headquarters",
      items: [
        "Nagpur Office: Suvidha Foundation, Motghare Bhavan, Ward No. 4, Santnagar, Annamod, Near Water Tank, Khaperkheda, Saoner, Nagpur, Maharashtra, India - 441102",
        "Hyderabad Office: Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad",
      ],
    },
    {
      icon: <FaPhone className="text-2xl text-primary" />,
      title: "Phone Numbers",
      items: ["+91 1234567890", "+91 9876543210"],
    },
    {
      icon: <FaEnvelope className="text-2xl text-primary" />,
      title: "Email Addresses",
      items: ["info@suvidhafoundation.org", "support@suvidhafoundation.org"],
    },
    {
      icon: <FaClock className="text-2xl text-primary" />,
      title: "Working Hours",
      items: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/company/suvidha-foundation",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/suvidhafoundation",
      label: "Twitter",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/suvidhafoundation",
      label: "Instagram",
    },
  ];

  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfAaaHU-k256CY6_83JPBOYeVFtKuKBvqMJb7oBIsDLKRmwNg/viewform";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-1">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sha">
  {/* Page Header with Background Image */}
  <div className="relative overflow-hidden rounded-xl mb-16 shadow-2xl">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0">
      <img 
        src="src/assets/otherImages/connect.jpg" // Update with your image path
        alt="Contact background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div> {/* Dark overlay */}
    </div>
    
    {/* Content */}
    <div className="relative z-10 text-center py-20 px-4">
      <h4 className="text-lg text-white font-semibold">Get In Touch</h4>
      <h2 className="text-3xl font-bold text-white mt-2">Contact Us</h2>
      <div className="w-20 h-1 bg-white mx-auto mt-4 rounded-full"></div>
    </div>
  </div>

  {/* Rest of your contact page content... */}
</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          {contactInfo.map((section, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-6 mt-1">{section.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Social Media Links */}
          <div className="pt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-primary hover:text-white text-primary w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Google Form Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h3>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Please fill out our contact form to get
            in touch with our team.
          </p>

          <div className="flex-grow flex flex-col justify-center items-center">
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-amber-500  not-hover:text-amber-500 not-hover:border-amber-800 not-hover:border-2 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center"
            >
              <span>Open Contact Form</span>
              <FaExternalLinkAlt className="ml-2" />
            </a>

            <p className="text-gray-500 text-sm mt-4 text-center">
              You'll be redirected to our secure Google Form
            </p>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold text-gray-800 mb-2">
              Prefer direct contact?
            </h4>
            <p className="text-gray-600">
              Call us at{" "}
              <a
                href="tel:+911234567890"
                className="text-primary hover:underline"
              >
                +91 1234567890
              </a>{" "}
              or email{" "}
              <a
                href="mailto:info@suvidhafoundation.org"
                className="text-primary hover:underline"
              >
                info@suvidhafoundation.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
