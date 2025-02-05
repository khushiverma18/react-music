
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
      <aside className="bg-neutral-900 text-white overflow-hidden  inset-0 z-40  backdrop-blur-lg ">
    <h2 className="hidden lg:flex text-2xl text-blue-300 font-bold mt-6 items-center justify-center">Mood Tracker</h2>
    <ul className='flex hidden lg:flex flex-col h-full pt-16 pb-6 px-6  cursor-pointer'>
       <Link to='/Home'> <li  className='text-xl text-white font-semibold py-3 text-white hover:bg-neutral-700 rounded-lg px-4 mb-2' >
            Home </li></Link>
            <Link to='/playlist'><li className='text-xl text-white font-semibold py-3 text-white hover:bg-neutral-700 rounded-lg px-4 mb-2'>
            playlist </li></Link>
            <Link to='/profile'> <li className='text-xl text-white font-semibold py-3 text-white hover:bg-neutral-700 rounded-lg px-4 mb-2'>
          profile</li></Link>
          <Link to='/setting'><li className='text-xl text-white font-semibold py-3 text-white hover:bg-neutral-700 rounded-lg px-4 mb-2'>
          Setting </li></Link>
    </ul>
   
    <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          type="button"
          className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
{!isOpen ? (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
) : (
  /* Close Icon */
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)}
</button>
</div>

{isOpen && (
  <div
    id="mobile-menu"
    className="lg:hidden fixed inset-0 z-40 bg-neutral-800/80 backdrop-blur-lg"
    onClick={() => setIsOpen(false)} // Close menu on outside click
  >
    <div
      className="flex flex-col h-full pt-16 pb-6 px-6"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      <Link to='/home'><a
      className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-neutral-700 rounded-lg transition-colors active"
    >
      Home
    </a></Link>
   <Link to='/playlist'> <a
      className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-neutral-700 rounded-lg transition-colors"
    >
      Playlist
    </a></Link>
   <Link to='/profile'> <a
      className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-neutral-700 rounded-lg transition-colors"
    >
      Profile
    </a></Link>
    <Link to='/Setting'> <a
      className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-neutral-700 rounded-lg transition-colors"
    >
      Seeting
    </a></Link>
      <div className="mt-auto">
        <div className="flex items-center space-x-3 px-4 py-3">
          <img
            src="https://avatar.iran.liara.run/public"
            className="w-8 h-8 rounded-full"
            alt="Profile"
          />
          <span className="text-sm">User@example.com</span>
        </div>
      </div>
    </div>
  </div>
)}
    
</aside>
  )
}
