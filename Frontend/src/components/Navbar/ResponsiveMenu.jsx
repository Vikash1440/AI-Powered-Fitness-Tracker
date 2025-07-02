import {motion, AnimatePresence } from 'framer-motion'
import React from 'react'

export default function ResponsiveMenu({open}) {
  return (
    <AnimatePresence mode="wait">
     {
        open &&(
            <motion.div
            initial={{opacity:0, y: -100}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:-100}}
            className="absolute top-20 left 0 w-full h-screen
              z-20"
            >
            <div className='text-xl font-semibold  bg-primary text-white py-8 m-6 rounded-3xl'>
              <ul className='flex flex-col justify-center items-center gap-8'>
                <li>Home</li>
                <li>CalculateBMI</li>
                <li>AIsuggestion</li>
                <li>UserDasboard</li>
              </ul>
            </div>

            </motion.div>
        )
     }
    </AnimatePresence>
  )
    
  
}
