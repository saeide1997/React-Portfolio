import React from "react";

const AbouteMe = () => {

        return(
        <div className="max-[640px]:flex-col flex p-14 bg-white " id="AbouteMe">
        <div className="flex-1 p-5 flex justify-center items-center">
            <img className="object-fill w-full h-full" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149375793.jpg?semt=ais_hybrid" alt="" />
        </div>
        <div className="flex-1 p-10 flex justify-center overflow-hidden items-center max-[640px]:p-0">
            <span className="max-[640px]:text-[18px] text-[25px] overflow-hidden text-violet-800">
                من یک برنامه نویس و توسعه دهنده وب هستم. با بیش از ۲ سال تجربه در این زمینه، پروژه های مختلفی رو انجام داده و با زبان های برنامه نویسی جاوااسکریپت،‌ پایتون و پی اچ پی و همچنین فریم ورک های ریکت، جنگو و... کار کردم.
                <br />
همیشه به دنبال فرصت هایی برای افزایش تخصص و مهارت های خود بوده و علاقه مند به همکاری با مجموعه ها و تیم های پویا و توسعه اپلیکیشن های نوآورانه هستم.
            </span>
        </div>
        </div>
    );

}

export default AbouteMe;