import React ,{ useState } from 'react';
import { FaHeart, FaRupeeSign, FaSearch } from 'react-icons/fa';
import { Link,} from 'react-router';

function OurDonors() {
    const donorsData = [
        // Categories - Individual , Corporate , Oraganization
        { id: 1, name: "PATHIK RAMESH JUTHANI", amount: 10000, date: "15/03/2023", category: "Individual" },
        { id: 2, name: "RAHUL V JAIN", amount: 5000, date: "22/04/2023", category: "Individual" },
        { id: 3, name: "SANDEEP GUPTA", amount: 5000, date: "10/05/2023", category: "Individual" },
        { id: 4, name: "HITESH KANUBHAI PAGHADAL", amount: 21000, date: "05/06/2023", category: "Individual" },
        { id: 5, name: "YOGESH SURESH AROTE", amount: 5000, date: "06/06/2023", category: "Individual" },
        { id: 6, name: "CHETAN SAILESH MEHTA", amount: 2000, date: "08/06/2023", category: "Individual" },
        { id: 7, name: "RAJESH CONTRO TRADING COMPANY", amount: 11000, date: "08/06/2023", category: "Corporate" },
        {id:8,name: "KADAVAKUTI SWARNA", amount: 10000, date: "10/06/2023", category: "Individual"},

        // Add more donors as needed
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');

    const filteredDonors = donorsData.filter(donor => {
        const matchesSearch = donor.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'All' || donor.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    const categories = ['All', ...new Set(donorsData.map(donor => donor.category))];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h4 className="text-lg text-primary font-semibold">Our Supporters</h4>
                    <h1 className="text-3xl font-bold text-gray-800 mt-2">Meet Our Generous Donors</h1>
                    <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Thank You Message */}
                <div className="bg-gradient-to-r from-yellow-50 to-white rounded-xl shadow-lg p-8 mb-12 text-center relative overflow-hidden">
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full opacity-20 -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary rounded-full opacity-10 -ml-16 -mb-16"></div>
  
                <div className="relative z-10">
                <div className="flex justify-center text-red-500 mb-4">
                <FaHeart className="text-4xl animate-pulse" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Thank You For Your Support</h2>
                <p className="text-gray-600 italic mb-6">"Every contribution brings us closer to our goals and helps create a better future for those in need."</p>
    
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/donate" // Update with your donation link
                className="bg-white hover:bg-amber-500 text-white not-hover:text-amber-500 not-hover:border-amber-800 not-hover:border-2 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center">
                Donate Now
                </Link>
                <Link
                 to="/" // Update with your volunteer/join link
                    className="bg-white hover:bg-amber-500 text-white border-2 not-hover:text-amber-500 not-hover:border-amber-800 not-hover:border-2 border-primary font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-md flex items-center justify-center"
                >
                    Join Our Mission
                </Link>
                </div>
            </div>
            </div>

                {/* Filters */}
                <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="relative w-full md:w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaSearch className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search donors..."
                            className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-auto">
                        <select
                            className="rounded-lg border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Donors Table */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Donor Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Donation Amount
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Category
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredDonors.length > 0 ? (
                                    filteredDonors.map((donor) => (
                                        <tr key={donor.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {donor.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div className="flex items-center">
                                                    <FaRupeeSign className="mr-1 text-gray-400" />
                                                    {donor.amount.toLocaleString('en-IN')}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {donor.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    donor.category === 'Corporate' 
                                                        ? 'bg-blue-100 text-blue-800' 
                                                        : donor.category === 'Organization' 
                                                            ? 'bg-purple-100 text-purple-800' 
                                                            : 'bg-green-100 text-green-800'
                                                }`}>
                                                    {donor.category}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                                            No donors found matching your criteria
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-primary text-black rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold mb-2">
                            {donorsData.length.toLocaleString()}
                        </div>
                        <div className="text-sm uppercase tracking-wider">Total Donors</div>
                    </div>
                    <div className="bg-secondary text-black rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold mb-2 flex justify-center items-center">
                            <FaRupeeSign className="mr-1" />
                            {donorsData.reduce((sum, donor) => sum + donor.amount, 0).toLocaleString('en-IN')}
                        </div>
                        <div className="text-sm uppercase tracking-wider">Total Contributions</div>
                    </div>
                    <div className="bg-accent text-balck rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold mb-2">
                            {new Set(donorsData.map(donor => donor.category)).size}
                        </div>
                        <div className="text-sm uppercase tracking-wider">Donor Categories</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurDonors;