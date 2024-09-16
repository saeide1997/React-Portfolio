import React from 'react';

const Testimonials = () => {
    const data = [
        {
          id: 1,
          name: "Tom Durden",
          title: "Senior Developer",
          img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/twitter.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "Alex Kalinski",
          title: "Co-Founder of DELKA",
          img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/youtube.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "Martin Harold",
          title: "CEO of ALBI",
          img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/linkedin.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];
    
      return (
        <div className="bg-white flex flex-col items-center " id="Testimonials">
          <h1 className="text-[50px] mt-10 max-[640px]:text-[20px]">تیم تشکیل دهنده</h1>
          <div className="w-[100%] h-[80%] flex items-center justify-center max-[640px]:flex-col ">
            {data.map((item) => (
              <div className={"w-[250px] h-[70%] rounded-lg shadow-md flex flex-col justify-between p-5 " + (item.featured && 'featured') + ' hover:scale-110'}>
                <div className="flex items-center justify-center">
                    <img className="h-[25px]" src={item.icon} alt="" />
                  <img
                    className="h-[60px] w-[60px] rounded-full object-cover mx-7 max-[640px]:w-[40px]"
                    src={item.img}
                    alt=""
                  />
                  <img className=" h-[25px]" src="assets/right-arrow.png" alt="" />

                </div>
                <div className="p-3 bg-violet-400/50">
                  {item.desc}
                </div>
                <div className="flex items-center flex-col justify-center">
                  <h3 className="mb-1">{item.name}</h3>
                  <h4 className="text-gray-500 ">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Testimonials;