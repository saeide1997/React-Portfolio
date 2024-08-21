import React, { useState } from "react";

const Works = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data =[
        {
            id: 1,
            title: "Content Social Media App",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
          },
          {
            id: 2,
            title: "Content Rampa UI Design",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
          },
          {
            id: 3,
            title: "Content E-commerce Web Design",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
          },
          {
            id: 4,
            title: "Content Relax Mobile App",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
          },
    ]

    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide < data.length-1 ? currentSlide + 1 : 0)
    }

  return (
    <div className="bg-violet-600 flex items-center justify-center relative overflow-hidden" id="Works">
      <div className="h-[400px] flex absolute left-0 tran" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
        {data.map((item)=>(
        <div className="w-[100vw] flex items-center justify-center">
          <div className="w-[800px] h-[100%] bg-white rounded-2xl flex items-center justify-center">
            <div className=" h-[80%] justify-center items-center flex flex1">
              <div className="w-[90%] h-[70%] flex flex-col justify-between">
                <div className="w-[50px] h-[50px] rounded-full bg-pink-400/50 flex items-center justify-center">
                  <img className="w-6 " src="assets/mobile.png" alt="" />
                </div>
                <h2 className="text-[20px] m-2">{item.title}</h2>
                <p className="text-[13px] m-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eveniet reprehenderit maiores dicta, quasi minus enim blanditiis consectetur neque nobis dolorum repellendus illum eius, aut saepe! Blanditiis qui tempora placeat?</p>
                <span  className="text-[12px] cursor-pointer underline">project</span>
              </div>
            </div>
            <div className="flex2 h-[100%] flex items-center justify-center overflow-hidden">
                <img className="w-[400px] -rotate-12" src={item.img} alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>
      <img onClick={()=>handleClick("left")} className="absolute h-[50px] left-32 rotate-180 cursor-pointer" src="assets/arrow.png" alt="" />
      <img onClick={()=>handleClick("right")} className="absolute h-[50px] right-32 cursor-pointer" src="assets/arrow.png" alt="" />
    </div>
  );
};

export default Works;
