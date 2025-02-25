import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Light Blue Strip */}
      <div className="bg-blue-100 text-center py-3 text-gray-800 text-lg font-semibold">
        Navigate your ideal career path with tailored expert advice &nbsp;
        <a href="#" className="text-blue-600 font-semibold">Contact Expert</a>
      </div>
      
      <nav className="bg-white py-3 px-10 md:px-20 flex justify-between items-center shadow-md">
        {/* Logo and Course Dropdown */}
        <div className="flex items-center space-x-4">
          <div className="text-blue-700 font-bold text-xl">accredian</div>
          <div className="relative">
            <button onClick={() => setCourseOpen(!courseOpen)} className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
              Courses <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {courseOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-md rounded-md py-2 w-48">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Web Development</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Data Science</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">AI & ML</a>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 ml-auto">
          {/* <a href="#" className="text-gray-800 hover:text-blue-500">Courses</a> */}
          <a href="#" className="text-gray-800 hover:text-blue-500">Refer & Earn</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">Resources</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">About Us</a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4 ml-6">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">Login</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Try for Free</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute top-12 left-0 w-full bg-white flex flex-col items-center py-4 space-y-4 md:hidden">
            <button onClick={() => setIsOpen(false)} className="absolute top-2 right-4">
              <X className="w-6 h-6 text-gray-800" />
            </button>
            {/* <a href="#" className="text-gray-800 hover:text-blue-500">Courses</a> */}
            <a href="#" className="text-gray-800 hover:text-blue-500">Refer & Earn</a>
            <a href="#" className="text-gray-800 hover:text-blue-500">Resources</a>
            <a href="#" className="text-gray-800 hover:text-blue-500">About Us</a>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md w-3/4">Login</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-3/4">Try for Free</button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
