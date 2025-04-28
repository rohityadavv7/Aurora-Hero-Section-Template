import {React, useEffect} from 'react'
import {motion, useMotionTemplate,useMotionValue, animate, useAnimate} from "motion/react"
import { stagger } from 'motion'

const COLORS = ["#0A2F85","#7E183D","#3B634B","#835BE2"]

function Hero() {
    const colors = useMotionValue(COLORS[0])

    const border = useMotionTemplate`1px solid ${colors}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${colors}` 

    useEffect(() => {
        animate(colors, COLORS,{
            ease:"easeInOut",
            duration:10,
            repeat:Infinity,
            repeatType:"mirror"
        })

        
    },[])

  return (
    <motion.div
   
    className='w-full relative -z-20 h-screen mt-22 flex flex-col'>
        
        <div className="w-11/12 flex flex-col items-center mx-auto ">
            {/* Banner */}

            <span className="flex w-[20%] md:w-[5.5%] group  items-center bg-white/40 gap-2 px-1 rounded-full">
                <div className="h-2 w-2 rounded-full ml-2 group-hover:blur-xs transition-all duration-300 bg-green-500"></div>
                <div className="text-white font-thin">Beta</div>
            </span>

            {/* Hero-Text */}
            <div className="mt-10 flex flex-col items-center">
                <div className=" text-3xl sm:text-4xl md:text-8xl text-center font-['Neue_Montreal'] bg-clip-text text-transparent bg-gradient-to-b
                 from-zinc-200 to-zinc-700">Not Just Pretty,</div>

                 <motion.div 
                
                 className=" text-6xl sm:text-7xl md:text-[200px] relative leading-15 md:leading-40 font-bold
                 bg-clip-text text-transparent bg-gradient-to-b
                 from-white via-zinc-500 to-zinc-900 perspective-dramatic">
                    <div 
                    // ref={scope}
                    className="text-center z-10">
                        POWERFUL
                    </div> 
                    
                </motion.div>

                 <div className="md:text-zinc-400 text-zinc-400 mt-6 md:mt-4 text-xs md:text-lg text-center"> We build web experiences that don't just look good — they perform even better.</div>

                 {/* Button */}
                 <div className="flex mt-15 gap-6 md:gap-22">
                    <button className="text-neutral-300 px-3 sm:px-4 md:px-8 py-1 md:py-3 border-[0.1px] rounded-2xl text-sm sm:text-md md:text-xl">
                        Get Started
                    </button>
                    
                    <div className="relative group cursor-pointer">

                        <motion.div 
                        style={{ border, boxShadow}}
                        className=" px-3 sm:px-4 md:px-8 py-1 sm:py-3 text-sm sm:text-lg rounded-2xl text-white bg-zinc-800">
                            Experience the Power
                        </motion.div>
                        
                    </div>
                 </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Hero