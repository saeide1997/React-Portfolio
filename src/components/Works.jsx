import React, { useState } from "react";

const Works = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data =[
        {
            id: 1,
            title: "وب سایت شرکتی",
            desc: 'در وبسایت‌های شرکتی، قالب وبسایت دارای صفحاتی برای معرفی شرکت، تاریخچه تاسیس، انواع محصولات و خدمات، بروشورها و ... طراحی می‌شود. یک وبسایت شرکتی که به خوبی طراحی شده باشد، هویت برند و ارزش شرکت را به نمایش می‌گذارد. ',
            img:
              "https://freshdesignweb.com/wp-content/uploads/Geekfolio-Creative-Website-Template.jpg",
          },
          {
            id: 2,
            title: " سایت های فروشگاهی",
            desc: 'این دسته از طراحی های وبسایت برای مشاغلی که می‌خواهند محصولات و یا خدماتشان را به صورت آنلاین بفروشند ضروری است. طراحی وب سایت فروشگاه آنلاین نقش مهمی در جذب مشتری، ایجاد تجربه کاربری مثبت و افزایش فروش دارد.',
            img:
              "https://cdn.dribbble.com/users/8931620/screenshots/16302415/media/ecba9cb0d12b64ae96557e15edb9e382.jpg?resize=400x0",
          },
          {
            id: 3,
            title: "وب سایت های نمونه کار",
            desc: 'در این وب سایت ها سابقه کار، مهارت ها و دستاوردهای یک فرد یا شرکت گذاشته می‌شود. معمولا توسط افراد حرفه ای مانند هنرمندان، طراحان، عکاسان، نویسندگان، فریلنسرها در زمینه های مختلف، جویندگان کار، دانشجویان و سایر کسب و کارهای کوچک مورد استفاده قرار می‌گیرد. ',
            img:
              "https://repository-images.githubusercontent.com/384091706/a1614500-e03f-11eb-986a-30f6f0d4f1cc",
          },
          {
            id: 4,
            title: "سایت‌های خبری و مجلات ",
            desc: 'این وب سایت ها همانطور که از نامشان پیداست بر ارائه اخبار، مقالات و سایر اشکال محتوا تمرکز دارند.',
            img:
              "https://www.silversurfers.com/wp-content/uploads/2016/05/bigstock-Modern-computer-media-devices-70894627.jpg",
          },
    ]

    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide < data.length-1 ? currentSlide + 1 : 0)
    }

  return (
    <div className="bg-violet-600 flex items-center justify-center relative overflow-hidden" id="Works">
      <div className="h-[400px] flex absolute left-0 tran max-[640px]:h-[100vh] max-[640px]:flex-col max-[640px]:justify-center" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
        {data.map((item)=>(
        <div className="w-[100vw] flex items-center justify-center">
          <div className="w-[800px] h-[100%] bg-white rounded-2xl flex items-center justify-center max-[640px]:w-[90%] max-[640px]:h-[180px] max-[640px]:my-1">
            <div className=" h-[80%] justify-center items-center flex flex1 max-[640px]:h-[100%]">
              <div className="w-[90%] h-[90%] flex flex-col justify-around ">
                <div className="w-[50px] h-[50px] rounded-full bg-pink-400/50 flex items-center justify-center max-[640px]:w-8 max-[640px]:h-8">
                  <img className="w-6 max-[640px]:w-2" src="assets/mobile.png" alt="" />
                </div>
                <h2 className="text-[30px] max-[640px]:text-[12px] m-2">{item.title}</h2>
                <p className="text-[16px] m-2 overflow-hidden max-[640px]:text-[8px]">{item.desc}</p>
                
              </div>
            </div>
            <div className="flex1 h-[100%] flex items-center justify-center overflow-hidden">
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
