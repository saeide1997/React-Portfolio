import {init} from 'ityped'
import { useEffect, useRef } from 'react';

const Intro = () => {
    const textRef = useRef()

    useEffect(()=>{
        init(textRef.current,{
            backDelay:  1500,
            startDelay: 1000,
            typeSpeed:  100,
            backSpeed:  150,
            showCursor: false,
            strings: ["JavaScript", "PhP", "ReactJs", "NodeJs", "WordPress"]
        })
    },[])

    return (
        
        <div className='bg-white w-[100%] h-[100vh] flex'  id="Intro">
            <div className="flex1 relative">
                <div className="w-[100%] h-[100%] mr-10 pl-12 flex flex-col justify-center ">
                    <h2 className="text-[45px] my-3">سلاملکوم</h2>
                    <h1 className="text-[60px] my-3">بنده سویده هستم </h1>
                    <h3 className="text-[30px] my-3">برنامه نویس <span className='text-violet-600 text-[45px]' ref={textRef}></span></h3>
                </div>
                <a className="absolute bottom-14 right-[20%]" href="#Portfolio">
                    <img className="w-[30px]" style={{animation:"arrowBlink 2s infinite"}} src="assets/down.png" alt="" />
                </a>
            </div>
            <div className="flex2 overflow-hidden">
                <div className="w-[900px] mt-[100px] h-[900px] bg-violet-500 rounded-full flex items-end justify-center float-left">
                    <img className="mb-60 h-[80%] object-contain" src="assets/sav1.png" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Intro;