import './App.css'
import Home from './home/home';
import Music from './music'
import { Route, Routes ,Outlet} from 'react-router-dom';
import Playlist from './playlist/playlist';
import Profile from './profile/profile';
import Setting from './setting/setting';
import Menu from './menu/menu';
import './music.css'
import Footer from './footer/footer';
import Header from './header/header';


function App() {
  return (
    <div className='style'>
      <div className='menu'><Menu/>
 <Routes>
 <Route path='/' element={<Music />} />
  <Route path='/home' element={<Music/>}> </Route>
    <Route path='/playlist' element={<Playlist/>}> </Route>
    <Route path='/profile' element={<Profile/>}></Route>
    <Route path='/Setting' element={<Setting/>}></Route>
  </Routes>
      <Footer/>
      </div>
    </div>
  )
}

export default App
