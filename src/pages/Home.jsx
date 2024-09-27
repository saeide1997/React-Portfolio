import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Works from '../components/Works';
import Menu from '../components/menu';
import Contact from '../components/Contact';
import '../components/style.css'
import AbouteMe from '../components/AbouteMe';

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className='h-[100vh] font-face-gm'>
            <Topbar menuOpen= {menuOpen} setMenuOpen = {setMenuOpen}/>
            <Menu menuOpen= {menuOpen} setMenuOpen = {setMenuOpen}/>
            <div className='sections'>
            <Intro/>
            <AbouteMe/>
            <Portfolio/>
            <Works/>
            {/* <Testimonials/> */}
            <Contact/>
            </div>
        </div>
    );
};

export default Home;