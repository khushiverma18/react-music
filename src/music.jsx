import React from 'react';
import Home from './home/home';
import Playlist from './playlist/playlist';
import Profile from './profile/profile';
import Setting from './setting/setting';
import Footer from './footer/footer';
import './music.css'


function Music() {
  return (
    <div className='style'>
        <div className='home'><Home/>
        <div className='playlist'><Playlist/>
        <div className='profile'><Profile/>
        <div className='setting'><Setting/></div>
        </div>
        </div>
        </div>
        <div className='footer'><Footer/></div>
    </div>
  );
}

export default Music;






