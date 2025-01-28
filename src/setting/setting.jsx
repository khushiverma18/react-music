import React, { useState } from 'react';

const Setting = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [IsOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };
  

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 class="text-3xl font-bold text-white mb-8 text-left">Settings</h1>

        {/* Account Section */}
        <div class="mb-8">
            <h2 class="text-xl font-semibold text-white mb-4 text-left">Account</h2>
            <div class="bg-neutral-800/50 rounded-lg divide-y divide-neutral-700">
                <div class="p-4 flex items-center justify-between">
                    <div>
                        <h3 class="text-white font-medium text-left">Profile Picture</h3>
                        <p class="text-neutral-400 text-sm text-left">Change your profile photo</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <img src="https://avatar.iran.liara.run/public" alt="Profile" class="w-10 h-10 rounded-full"/>
                        <button class="px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors">
                            Change
                        </button>
                    </div>
                </div>
                
                <div class="p-4 flex items-center justify-between">
                <div>
                        <h3 class="text-white font-medium text-left">Email</h3>
                        <p class="text-neutral-400 text-sm text-left">user@example.com</p>
                    </div>
                    <div class="flex items-center gap-4">
                    <button class="text-purple-400 hover:text-purple-300 transition-colors">Edit</button>
                    </div>
                </div>
                <div class="p-4 flex items-center justify-between">
                <div>
                        <h3 class="text-white font-medium text-left">Password</h3>
                        <p class="text-neutral-400 text-sm text-left">Last changed 3 months ago</p>
                    </div>
                    <div class="flex items-center gap-4">
                    <button class="text-purple-400 hover:text-purple-300 transition-colors">Change</button>
                    </div>
                </div>
            </div>
        </div>

        {/* App Preferences Section */}
        <div class="mb-8">
            <h2 class="text-xl font-semibold text-white mb-4 text-left">App Preferences</h2>
            <div class="bg-neutral-800/50 rounded-lg divide-y divide-neutral-700">
                <div class="p-4 flex items-center justify-between">
                    <div>
                        <h3 class="text-white font-medium text-left">Dark Mode</h3>
                        <p class="text-neutral-400 text-sm text-left">Toggle dark/light theme</p>
                    </div>
                    <button class="w-12 h-6 bg-purple-600 rounded-full relative">
                        <span class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                    </button>
                </div>

                <div class="p-4 flex items-center justify-between">
                    <div>
                        <h3 class="text-white font-medium text-left">Notifications</h3>
                        <p class="text-neutral-400 text-sm text-left">Get mood tracking reminders</p>
                    </div>
                    <button class="w-12 h-6 bg-neutral-700 rounded-full relative">
                        <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                    </button>
                </div>

                <div class="p-4 flex items-center justify-between">
                    <div>
                        <h3 class="text-white font-medium text-left">Autoplay</h3>
                        <p class="text-neutral-400 text-sm text-left">Automatically play music after mood detection</p>
                    </div>
                    <button class="w-12 h-6 bg-purple-600 rounded-full relative">
                        <span class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                    </button>
                </div>
            </div>
        </div>

        
        <div class="mb-8">
            <h2 class="text-xl font-semibold text-white mb-4 text-left">Privacy</h2>
            <div class="bg-neutral-800/50 rounded-lg divide-y divide-neutral-700">
                <div class="p-4 flex items-center justify-between">
                    <div>
                        <h3 class="text-white font-medium text-left">Camera Access</h3>
                        <p class="text-neutral-400 text-sm text-left">Allow camera access for mood detection</p>
                    </div>
                    <button class="w-12 h-6 bg-purple-600 rounded-full relative">
                        <span class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                    </button>
                </div>

                <div class="p-4 flex items-center justify-between">
                    <div>
                        <h3 class="text-white font-medium text-left">Share Mood History</h3>
                        <p class="text-neutral-400 text-sm text-left">Allow sharing of mood data for better recommendations</p>
                    </div>
                    <button class="w-12 h-6 bg-neutral-700 rounded-full relative">
                        <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                    </button>
                </div>
            </div>
        </div>
        
        <h2 className="text-xl mt-6  font-semibold text-red-500 mb-4 text-left">Danger Zone</h2>
        <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20 mb-11">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
            <p className="text-xl cursor-pointer text-left">Delete Account</p>
                <p>Once you delete your account, there is no going back. Please be certain.</p>
              </div>
              <button className="bg-red-500  text-white px-4 py-2 cursor-pointer rounded-lg">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Setting;
