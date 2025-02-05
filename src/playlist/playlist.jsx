import React from "react";

const Playlist = () => {
  const songs = [
    { title: "Happy Together", artist: "The Turtles", duration: "3:45" },
    { title: "Walking on Sunshine", artist: "Katrina & The Waves", duration: "3:58" },
    { title: "Don't Stop Believin'", artist: "Journey", duration: "4:11" },
  ];

  return (
    <div className="p-6 bg-black h-screen min-h-screen p-6 ">
      <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
       <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                
                <div> <h2 className="text-2xl font-bold text-white">Happy Vibes Playlist</h2>
        <p className="text-neutral-400">Songs to boost your mood</p></div> 
        </div>
        <button class="px-6 py-2 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 rounded-full flex items-center gap-2 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Shuffle Playlist
            </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {songs.map((song, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded flex justify-between items-center"
          >
            <div className="w-16 h-16 bg-neutral-700 rounded flex-shrink-0 relative group"><img src="https://placehold.co/100x100" alt="Album art" className="w-full h-full object-cover rounded"/></div>
            <div>
              <p className="text-lg text-white font-semibold">{song.title}</p>
              <p className="text-sm text-white text-gray-400">{song.artist}</p>
            </div>
            <p className="text-white">{song.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
