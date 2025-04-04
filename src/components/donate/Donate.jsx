import React from 'react';
import { FaRupeeSign,  FaHandHoldingHeart, FaBook, FaFemale, FaMedkit, FaSmile } from 'react-icons/fa';
import { MdLocalLaundryService, MdFastfood } from 'react-icons/md';
import { useNavigate, useNavigation } from 'react-router';

function Donate() {
    const navigate = useNavigate()
  const campaigns = [
    {
      id: 1,
      name: "Clothes Distribution",
      icon: <MdLocalLaundryService className="text-blue-500 text-xl" />,
      description: "Provide warm clothing and essential garments to underprivileged families during extreme weather conditions",
      amount: 2000,
      link: "https://pages.razorpay.com/pl_PNqr3Fn1KJ5Nzk/view"
    },
    {
      id: 2,
      name: "Food Distribution",
      icon: <MdFastfood className="text-green-500 text-xl" />,
      description: "Sponsor nutritious meals for children and families in need through our community kitchens",
      amount: 5000,
      link: "https://pages.razorpay.com/pl_PNV8LO3zFLvW8P/view"
    },
    {
      id: 3,
      name: "Education Fund",
      icon: <FaBook className="text-purple-500 text-xl" />,
      description: "Support our free education programs providing books, supplies and digital learning resources",
      amount: 10000,
      link: "https://pages.razorpay.com/pl_PNqtcvyo8at4QT/view"
    },
    {
      id: 4,
      name: "Empower Her Future",
      icon: <FaFemale className="text-pink-500 text-xl" />,
      description: "Fund vocational training and entrepreneurship programs for underprivileged women",
      amount: 15000,
      link: "https://pages.razorpay.com/pl_PNqt0egn0pTKRQ/view"
    },
    {
      id: 5,
      name: "Health Care Initiative",
      icon: <FaMedkit className="text-red-500 text-xl" />,
      description: "Provide free medical camps, medicines and health awareness programs in rural areas",
      amount: 20000,
      link: "https://pages.razorpay.com/pl_PNqvh8mf1ORde8/view"
    },
    {
      id: 6,
      name: "Support a Smile",
      icon: <FaSmile className="text-yellow-500 text-xl" />,
      description: "Contribute any amount to support our mental health and well-being programs",
      amount: "Any Amount",
      link: "https://pages.razorpay.com/pl_PNztFxhixjKywz/view"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h4 className="text-lg text-primary font-semibold">Make a Difference</h4>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">Support Suvidha Foundation</h1>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
          Your generous donation helps us continue our mission of empowering communities through education, healthcare, and social welfare programs.
        </p>
      </div>

      {/* Campaigns Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
          <FaHandHoldingHeart className="text-red-500 mr-3" />
          Choose a Campaign to Support
        </h2>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Donate</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {campaigns.map((campaign) => (
                  <tr key={campaign.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 mr-3">
                          {campaign.icon}
                        </div>
                        <div className="font-medium text-gray-900">{campaign.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-md">
                      {campaign.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href={campaign.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-amber-500 text-white py-2 px-4  not-hover:text-amber-500 not-hover:border-amber-800 not-hover:border-2  rounded-full inline-flex items-center transition-colors duration-300"
                      >
                        {typeof campaign.amount === 'number' ? (
                          <>
                            <FaRupeeSign className="mr-1" />
                            {campaign.amount.toLocaleString('en-IN')}
                          </>
                        ) : (
                          campaign.amount
                        )}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bank Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaRupeeSign className="text-green-500 mr-3" />
            For Indian Donors
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Bank Transfer Details</h3>
              <dl className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Bank Name</dt>
                  <dd className="mt-1 text-sm text-gray-900">Bank of Baroda</dd>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Branch</dt>
                  <dd className="mt-1 text-sm text-gray-900">Nagpur</dd>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Account Name</dt>
                  <dd className="mt-1 text-sm text-gray-900">Suvidha Mahila Mandal</dd>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Account Number</dt>
                  <dd className="mt-1 text-sm text-gray-900">97840100027609</dd>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">IFSC Code</dt>
                  <dd className="mt-1 text-sm text-gray-900">BARB0DBKPAR</dd>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Contact</dt>
                  <dd className="mt-1 text-sm text-gray-900">+91 1234567890</dd>
                </div>
              </dl>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-500 italic">
                * Please share your donation details at <span className="text-primary">donations@suvidhafoundation.org</span> for receipt and acknowledgment
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Scan to Donate</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <img 
              src="src/assets/otherImages/QR_Code.jpg" 
              alt="UPI QR Code for donations" 
              className="w-64 h-64 object-contain"
            />
          </div>
          <p className="text-gray-600 text-center">
            Scan this QR code using any UPI payment app to make an instant donation
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Have questions about donations?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Contact our donation team at <span className="text-primary">donations@suvidhafoundation.org</span> or call us at <span className="text-primary">+91 1234567890</span>
        </p>
        <button className="bg-primary hover:bg-amber-500  not-hover:text-amber-500 not-hover:border-amber-800 not-hover:border-2  text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
        onClick={() => navigate('/contact')}>
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Donate;