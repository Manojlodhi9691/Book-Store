import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <div className="bg-gray-500 min-h-screen flex items-center justify-center p-4">
        {/* Added 'relative' here so the X symbol can be positioned absolutely */}
        <div className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Close (X) Symbol */}
          <Link 
            to="/" 
            className="absolute top-4 right-4 text-gray-500 hover:text-pink-600 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Link>

          {/* Left Sidebar */}
          <div className="md:w-1/3 bg-gray-800 p-10 flex flex-col justify-center items-center text-center">
            <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-white text-2xl font-bold">Book Store</h2>
          </div>

          {/* Right Content Area */}
          <div className="md:w-2/3 p-10 md:p-16">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
              Our <span className="text-pink-600">Mission</span>
            </h1>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                We specialize in providing high-quality resources for <span className="font-semibold text-gray-800">Competitive Programming</span> and technical examinations. Our collection is curated to help developers master algorithms, data structures, and mathematical logic.
              </p>
              
              <p>
                Whether you are preparing for an ICPC contest or a technical interview at a top-tier firm, our bookstore provides the foundational knowledge required to pass the most rigorous test cases.
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <Link to="/contact">
                <button className="border bg-pink-400 border-gray-300 text-white px-6 py-2 rounded-lg hover:bg-pink-500 transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About