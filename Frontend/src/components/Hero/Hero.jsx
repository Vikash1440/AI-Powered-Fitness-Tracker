import React from 'react'
import { FaPlay } from 'react-icons/fa'
import HeroImg from '../../assets/dumbell.png'
import { motion } from 'framer-motion'
import { slideRight } from '../../utility/animation'
import BgImg from '../../assets/bgimg.png'

// Equipments start
import {GrYoga} from "react-icons/gr";
import {FaDumbbell} from "react-icons/fa6";
import {GiGymBag} from "react-icons/gi";
import { slideLeft } from '../../utility/animation';

const EquipmentData=[
    {
        id:1,
        title:"Yoga Equipments",
        des:"Explore essential yoga equipment to support balance, flexibility, and comfort in every pose.",
        icon:<GrYoga/>,
        delay:0.3,
    },
    {
        id:2,
        title:"Muscles Equipments",
        des:"Build strength effectively with muscle equipment designed for targeted resistance and performance.",
        link:"/",
        icon:<FaDumbbell/>,
        delay:0.6,
    },
    {
        id:3,
        title:"Fitness Equipments",
        des:"Enhance your workouts with versatile fitness equipment for strength, cardio, and overall wellness.",
        link:"/",
        icon:<GiGymBag/>,
        delay:0.9,
    }
]
// end equipment

const bgStyle={
  backgroundImage:`url(${BgImg})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center",
  backgroundAttachment:"fixed",
};
export default function Hero() {
  return (
    <>
   <section className='overflow-x-hidden'>
    <div style={bgStyle}>
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative pt-24 ">
        {/* Brand info */}
          <div className='flex flex-col justify-center py-14 md:py-0 font-playfair'>
            <div className='text-center md:text-left space-y-6'>

            <motion.h1
            variants={slideRight(0.6)} 
            initial="hidden"
            animate="visible"
            className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal'>
               FitTrack Give you the perfect <span className='text-primary'>Health</span>{" "}
            </motion.h1>
            <motion.p 
            variants={slideRight(1.2)} 
            initial="hidden"
            animate="visible"
            className='text-gray-600 xl:max-w-[500px]'>
              Using the power of AI, the website
               provides smart suggestions based on 
               your fitness data, tracks your daily 
               progress with visual charts, and keeps 
               you motivated on your journey to a healthier lifestyle.  
            </motion.p>
            {/* button section */}
            <motion.div
            variants={slideRight(1.5)} 
            initial="hidden"
            animate="visible"
            className='flex justify-center items-center gap-8 md:justify-start  !mt-8'>
              <button className='parimary-btn flex items-center gap-2'>
                {" "}
                <FaPlay/>
                Watch Now
                </button>
            </motion.div>
            </div>
          </div>
        {/* Hero image */}
        <div className='flex justify-center items-center'>
          <img
          src={HeroImg} 
          alt="" 
          className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow' 
          />
        </div>
    </div>
    </div>
           {/* <h1 className='bg-red-600'>hellow</h1> */}
           <div>
                  <div className=" container py-24">
                   <div className="grid grid-cols-1 sm:grid-cols-2
                   md:grid-cols-4 gap-6 font-playfair">
                      <div className='space-y-6 p-6'>
                       <h1 className='text-3xl md:text-4xl font-bold'>What we offer for you</h1>
                       <p className='text-gray-500'>Discover personalized fitness plans, expert 
                           wellness tips, and tools 
                           tailored to support your health journey
                       </p>
                      </div> 
                      {
                       EquipmentData.map((item)=>{
                           return(
                               <motion.div
                               variants={slideLeft(item.delay)}
                               initial="hidden"
                               whileInView="visible"
                               key={item.id}
                                className=' space-y-4 p-6 bg-[#fbfbfb]
                               hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]'>
                                   <div className='text-4xl'>{item.icon}</div>
                                   <p className='text-2xl font-semibold '>{item.title}</p>
                                   <p className='text-gray-500'>{item.des}</p>
                               </motion.div>
                           );
                       })
                      }
                   </div>
                  </div>
               </div>
   </section>
   </>
  )
}
