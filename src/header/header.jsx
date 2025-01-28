import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20">
      {/* Navigation Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-blue-900 text-white">
        <h1 className="text-xl font-bold">Mood Music</h1>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-icons">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Menu */}
        <nav
          className={`absolute lg:relative top-16 lg:top-0 right-0 lg:flex bg-blue-800 lg:bg-transparent w-full lg:w-auto p-6 lg:p-0 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
