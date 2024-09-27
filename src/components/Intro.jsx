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
        
        <div className='bg-white  flex max-[1000px]:flex-col max-[1000px]:items-center'  id="Intro">
            <div className="flex-1 relative w-[100%]">
                <div className="w-[100%] h-[100%] mr-10 pl-12 flex flex-col justify-center max-[1000px]:pl-0 max-[1000px]:items-center max-[1000px]:mr-0">
                    <h2 className="text-[40px] my-3">سلام</h2>
                    <h1 className="text-[50px] max-[1000px]:text-[30px] my-3">من سعیده تاجمهر هستم </h1>
                    <h3 className="text-[35px] my-3 max-[1000px]:text-[20px]">برنامه نویس <span className='text-violet-600 text-[45px] max-[1000px]:text-[20px]' ref={textRef}></span></h3>
                    <div className='flex '>
                        <a className="text-[20px] text-white flex justify-center items-center p-5 ml-20 mt-20 border-solid border-violet-800 border-2 bg-violet-500 rounded-lg bottom-14 right-[20%]" href="#Portfolio">درباره من</a>
                        <a className="text-[20px] text-white flex justify-center items-center p-5 mt-20 border-solid border-violet-800 border-2 bg-violet-500 rounded-lg bottom-14 right-[20%]" href="#Portfolio">تماس من</a>
                    </div>
                </div>
                <a className="absolute bottom-14 right-[20%]" href="#Portfolio">
                    <img className="w-[30px]" style={{animation:"arrowBlink 2s infinite"}} src="assets/down.png" alt="" />
                </a>
            </div>
            <div className="max-[640px]:flex-1 flex-2 overflow-hidden">
                <div className="w-[900px] mt-[40px] h-[900px] bg-violet-500/50 rounded-full flex items-end justify-center float-left max-[1000px]:items-start">
                    <img className="max-[640px]:w-[60%] max-[640px]:h-[55%] object-contain h-full w-full " src="assets/sav1.png" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Intro;