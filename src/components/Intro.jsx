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
                    <h2 className="text-[30px] my-1">سلام ...</h2>
                    <h1 className="text-[40px] max-[1000px]:text-[30px] my-1">من سعیده تاجمهر هستم. </h1>
                    <h3 className="text-[35px] my-3 max-[1000px]:text-[20px]">برنامه نویس <span className='text-violet-600 text-[50px] max-[1000px]:text-[20px]' ref={textRef}></span></h3>
                    <div className='flex '>
                        <a className="text-[20px] text-white flex justify-center items-center p-5 ml-20 mt-10 border-solid border-violet-800 border-2 bg-violet-500 rounded-lg bottom-14 right-[20%]" href="#AbouteMe">درباره من</a>
                        <a className="text-[20px] text-white flex justify-center items-center p-5 mt-10 border-solid border-violet-800 border-2 bg-violet-500 rounded-lg bottom-14 right-[20%]" href="#Contact">تماس من</a>
                    </div>
                </div >
                <a className="max-[640px]:hidden absolute bottom-14 right-[20%]" href="#Portfolio">
                    <img className="w-[30px]" style={{animation:"arrowBlink 2s infinite"}} src="assets/down.png" alt="" />
                </a>
            </div>
            <div className="max-[640px]:flex-1 max-[640px]:h-[100vw] max-[640px]:w-full flex-15 overflow-hidden max-[1000px]:items-end">
                <div className="max-[640px]:h-[100vw] max-[640px]:w-full w-full mt-1 h-[60vw] bg-violet-500/50 rounded-full flex items-end justify-center float-left max-[1000px]:items-end">
                    <img className="max-[640px]:w-[100%] max-[640px]:h-[100%] object-fill  w-full" src="assets/sav1.png" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Intro;