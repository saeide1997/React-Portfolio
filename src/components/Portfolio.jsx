import React, { useEffect, useState } from 'react';
import PortfolioList from './PortfolioList';
import {featuredPortfolio, webPortfolio, mobilePortfolio} from '../data.js'

const Portfolio = () => {

    const [selected, setSelected] = useState('wordpress')
    const [data, setData] = useState([])

    const list =[
        {
            id:"wordpress",
            title: "وردپرسی"
        },
        {
            id:"wordpress1",
            title: "طراحی ui"
        },
        {
            id:"wordpress2",
            title: "طراحی سایت"
        },
    ]

    useEffect(()=>{
        switch(selected){
            case "wordpress":
                setData(featuredPortfolio)
                break
            case "wordpress1":
                setData(webPortfolio)
                break
            case "wordpress2":
                setData(mobilePortfolio)
                break
            default:
                setData(featuredPortfolio)
        }

    },[selected])

    return (
        <div  className='bg-white flex flex-col items-center' id='Portfolio'>
            <h1 className='text-[40px] m-10'>نمونه کارهای انجام شده</h1>
            <ul className='mx-3 my-5 p-0 list-none flex '>
                {list.map(item=>(
                    <PortfolioList title={item.title} active={selected === item.id} setSelected = {setSelected} id={item.id}/>
                ))}
            </ul>
            <div className='w-[70%] flex items-center justify-center flex-wrap'>
                {data.map((item)=>(
            <div className='cursor-pointer flex flex-col tran w-[220px] h-[150px] relative border rounded-2xl border-solid mx-5 my-3 items-center justify-center hover:bg-violet-300/30' style={{zIndex :"9"}}>
                <img className='w-[100%] h-[100%] object-cover rounded-2xl z-10 hover:opacity-20' src={item.img} alt="" />
                <h3 className='absolute text-[20px]'>{item.title}</h3>
            </div>))}
            </div>
            
        </div>
    );
};

export default Portfolio;