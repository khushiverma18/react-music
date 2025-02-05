import React from 'react'

function Profile() {
  return (
    <div className="p-6 text-white bg-black">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        <div className="relative group">
            <img src="https://avatar.iran.liara.run/public" alt="Profile" className="w-40 h-40 rounded-full object-cover border-4 border-neutral-700"/>
            <button className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
            </button>
        </div>
        
        <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-white mb-2">John Doe</h1>
            <p className="text-neutral-400 mb-6">john.doe@example.com</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button className="px-6 py-2 bg-white text-neutral-900 rounded-full hover:bg-neutral-200 transition-colors">
                    Edit Profile
                </button>
                <button className="px-6 py-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors">
                    Settings
                </button>
            </div>
        </div>
    </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gray-800 p-6 rounded text-center">
          <p className="text-4xl font-bold text-white mb-2">24</p>
          <p className="text-gray-400">Playlists Created</p>
        </div>
        <div className="bg-gray-800 p-6 rounded text-center">
          <p className="text-4xl font-bold text-white mb-2">142</p>
          <p className="text-gray-400">Favorite Songs</p>
        </div>
        <div className="bg-gray-800 p-6 rounded text-center">
          <p className="text-4xl font-bold text-white mb-2">7</p>
          <p className="text-gray-400">Mood Categories</p>
        </div>
      </div>

      {/* Recent Moods Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 text-left ">Recent Moods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-yellow-500/20 rounded-lg p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <div>
                    <h3 className="text-white font-medium text-left">Happy</h3>
                    <p className="text-neutral-400 text-sm text-left">2 hours ago</p>
                </div>
            </div>
          <div className="bg-blue-500/20 rounded-lg p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <div>
                    <h3 className="text-white font-medium text-left">Calm</h3>
                    <p className="text-neutral-400 text-sm text-left">Yesterday</p>
                </div>
            </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 text-left">Settings</h2>
        <div className="bg-neutral-800/50 rounded-lg divide-y divide-neutral-700">
            <div className="p-4 flex items-center justify-between">
                <div>
                    <h3 className="text-white font-medium text-left">Dark Mode</h3>
                    <p className="text-neutral-400 text-sm text-left">Toggle dark/light theme</p>
                </div>
                <button className="w-12 h-6 bg-purple-600 rounded-full relative">
                    <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                </button>
            </div>
            <div className="p-4 flex items-center justify-between">
                <div>
                    <h3 className="text-white font-medium text-left">Notifications</h3>
                    <p className="text-neutral-400 text-sm text-left">Get mood tracking reminders</p>
                </div>
                <button className="w-12 h-6 bg-neutral-700 rounded-full relative">
                    <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                </button>
            </div>
        </div>
    </div>
    
    <div>
    <div className="mb-8 mt-9">
        <div className="relative max-w-2xl mx-auto">
            <input type="text" 
                   placeholder="Search for songs, artists, or moods..." 
                   className="w-full bg-neutral-800/50 border border-neutral-700 rounded-full py-4 px-6 pl-12 text-white placeholder-neutral-400 focus:outline-none focus:border-purple-500 transition-colors"/>
            <svg className="w-6 h-6 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
        </div>
    </div>

    <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4 text-left">Recent Searches</h2>
        <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-neutral-800/50 rounded-full text-neutral-400 hover:bg-neutral-700 transition-colors">
                Happy playlist
            </button>
            <button className="px-4 py-2 bg-neutral-800/50 rounded-full text-neutral-400 hover:bg-neutral-700 transition-colors">
                Chill vibes
            </button>
            <button className="px-4 py-2 bg-neutral-800/50 rounded-full text-neutral-400 hover:bg-neutral-700 transition-colors">
                Energetic mood
            </button>
        </div>
    </div>

    <div>
        <h2 className="text-xl font-bold text-white mb-6 text-left">Search Results</h2>
        
        
        <div className="flex gap-4 mb-6 overflow-x-auto no-scrollbar">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-full whitespace-nowrap">All Results</button>
            <button className="px-6 py-2 bg-neutral-800 text-white rounded-full whitespace-nowrap hover:bg-neutral-700 transition-colors">Songs</button>
            <button className="px-6 py-2 bg-neutral-800 text-white rounded-full whitespace-nowrap hover:bg-neutral-700 transition-colors">Artists</button>
            <button className="px-6 py-2 bg-neutral-800 text-white rounded-full whitespace-nowrap hover:bg-neutral-700 transition-colors">Playlists</button>
            <button className="px-6 py-2 bg-neutral-800 text-white rounded-full whitespace-nowrap hover:bg-neutral-700 transition-colors">Moods</button>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          
            <div className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-800 transition-colors">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-neutral-700 rounded flex-shrink-0 relative group">
                        <img src="https://placehold.co/100x100" alt="Song thumbnail" className="w-full h-full object-cover rounded"/>
                        <button className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <h3 className="text-white font-medium">Happy Together</h3>
                        <p className="text-neutral-400 text-sm">The Turtles</p>
                        <span className="text-xs text-purple-400 mt-1 block">Song</span>
                    </div>
                </div>
            </div>

            
            <div className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-800 transition-colors">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-neutral-700 rounded flex-shrink-0 relative group">
                        <img src="https://placehold.co/100x100" alt="Playlist thumbnail" className="w-full h-full object-cover rounded"/>
                        <button className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <h3 className="text-white font-medium">Happy Vibes</h3>
                        <p className="text-neutral-400 text-sm">234 songs</p>
                        <span className="text-xs text-purple-400 mt-1 block">Playlist</span>
                    </div>
                </div>
            </div>

          
            <div className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-800 transition-colors">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-neutral-700 rounded-full flex-shrink-0 overflow-hidden">
                        <img src="https://avatar.iran.liara.run/public" alt="Artist" className="w-full h-full object-cover"/>
                    </div>
                    <div >
                        <h3 className="text-white font-medium">Happy Music Band</h3>
                        <p className="text-neutral-400 text-sm">1.2M followers</p>
                        <span className="text-xs text-purple-400 mt-1 block">Artist</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
   
   
  );
};



export default Profile
