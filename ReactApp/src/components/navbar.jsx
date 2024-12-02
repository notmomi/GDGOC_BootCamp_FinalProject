import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import arrow from '../assets/images/icon-arrow-down.svg';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="flex justify-between items-center px-4 py-4 sm:px-6 sm:py-5 bg-white shadow-md">
      <img
        src={logo}
        alt="Snap"
        className="h-auto w-auto"
      />
      
      <nav className="flex space-x-6 sm:space-x-10 items-center">
        {['Company', 'Features'].map((item) => (
          <div key={item} className="relative">
            {/* Dropdown Button */}
            <button
              onClick={() => toggleDropdown(item)}
              className="flex items-center space-x-2 hover:text-blue-200 transition duration-300"
            >
              <span>{item}</span>
              <img
                src={arrow}
                alt="Down Arrow"
                className={`h-4 w-4 transform transition-transform ${openDropdown === item ? 'rotate-180' : ''}`}
              />
            </button>

            {openDropdown === item && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-lg w-40">
                <ul className="space-y-2 p-2">
                  {item === 'Company' ? (
                    <>
                      <li><a href="#about" className="block hover:text-blue-200">About Us</a></li>
                      <li><a href="#team" className="block hover:text-blue-200">Team</a></li>
                      <li><a href="#careers" className="block hover:text-blue-200">History</a></li>
                    </>
                  ) : (
                    <>
                      <li><a href="#feature1" className="block hover:text-blue-200">ToDo list</a></li>
                      <li><a href="#feature2" className="block hover:text-blue-200">Calendar</a></li>
                      <li><a href="#feature3" className="block hover:text-blue-200">Reminder</a></li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        ))}

        
        <a href="#home" className="hover:text-blue-200 transition duration-300">Careers</a>
        <a href="#contact" className="hover:text-blue-200 transition duration-300">About</a>
      </nav>
    </header>
  );
};

export default Header;
