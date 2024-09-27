import React from 'react';

const menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={'right-[-500px] w-[500px] h-[100vh] bg-white fixed top-0 z-10 flex flex-col items-center justify-center ' + (menuOpen && "menuActive") }  style={{ transition: "all 1s ease" }}>
            <ul className='m-0 p-0 list-none text-[25px]'>
                <li className='mb-5 cursor-pointer hoverr' onClick={()=>setMenuOpen(false)}><a href="#Intro">معرفی من</a></li>
                <li className='mb-5 cursor-pointer hoverr'  onClick={()=>setMenuOpen(false)}><a href="#AbouteMe">درباره من </a></li>
                <li className='mb-5 cursor-pointer hoverr'  onClick={()=>setMenuOpen(false)}><a href="#Portfolio">نمونه کار</a></li>
                <li className='mb-5 cursor-pointer hoverr'  onClick={()=>setMenuOpen(false)}><a href="#Works">پروژه های قابل اجرا</a></li>
                <li className='mb-5 cursor-pointer hoverr'  onClick={()=>setMenuOpen(false)}><a href="#Testimonials">تیم تشکیل دهنده</a></li>
                <li className='mb-5 cursor-pointer hoverr'  onClick={()=>setMenuOpen(false)}><a href="#Contact">تماس با من</a></li>
            </ul>
        </div>
    );
};

export default menu;