import React from 'react'
import { IoCameraOutline } from "react-icons/io5";
import Menu from '../menu/menu';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 to-blue-900  text-white font-sans duration-500">
      <div className='text-black'>h</div>
      {/* Main Content */}
      <div className="mt-10 flex-1 p-10">
        {/* Header */}
        <h1 className="text-5xl font-bold mb-6">Discover Music for Your Mood</h1>
        <p className="text-lg mb-8">
          Let us detect your mood and create the perfect playlist just for you.
        </p>

        {/* Scan Button */}
        <button class="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 transition-all hover:bg-gradient-to-br hover:from-purple-500 hover:to-blue-400">
            <span class="relative flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-4 transition-all duration-300 group-hover:bg-opacity-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="text-xl font-semibold text-white">Scan My Mood</span>
            </span>
        </button>

        {/* How It Works Section */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="flex flex-col items-center text-center">
            <div class="w-16 h-16 mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                    </div>
              <h3 className="text-xl font-semibold">Scan Your Face</h3>
              <p className="text-gray-300">
                Let our AI analyze your facial expressions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
            <div class="w-16 h-16 mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
              <h3 className="text-xl font-semibold">Detect Mood</h3>
              <p className="text-gray-300">
                We'll identify your current emotional state.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
            <div class="w-16 h-16 mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                        <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                        </svg>
                    </div>
              <h3 className="text-xl font-semibold">Get Your Playlist</h3>
              <p className="text-gray-300">
                Enjoy a personalized playlist matching your mood.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
