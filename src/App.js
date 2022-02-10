import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner.jsx';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Footer from './components/Footer/Footer.jsx';


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Banner/>
            <Profile/>
            <Navbar/>
            <Footer/>
        </div>
    );
}


export default App;
