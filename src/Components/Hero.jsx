import {React, useEffect} from 'react'
import {motion, useMotionTemplate,useMotionValue, animate} from "motion/react"

const COLORS = ["#0A2F85","#7E183D","#3B634B","#835BE2"]

function Hero() {
    const colors = useMotionValue(COLORS[0])
    
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${colors})`

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
    style={{backgroundImage}} 
    className='w-full relative -z-20 h-full flex flex-col '>
        
        <div className="w-11/12 flex flex-col items-center mx-auto ">
            {/* Banner */}

            <span className="flex w-[20%] md:w-[5.5%]  items-center bg-white/40 gap-2 px-1 rounded-full">
                <div className="h-2 w-2 rounded-full ml-2 bg-green-500"></div>
                <div className="text-white font-thin">Beta</div>
            </span>

            {/* Hero-Text */}
            <div className="mt-10 flex flex-col items-center">
                <div className="text-4xl md:text-8xl text-center font-['Neue_Montreal'] bg-clip-text text-transparent bg-gradient-to-b
                 from-zinc-200 to-zinc-700">Not Just Pretty</div>

                 <div className=" text-7xl md:text-[200px] relative leading-15 md:leading-40 font-bold
                 bg-clip-text text-transparent bg-gradient-to-b
                 from-white via-zinc-500 to-zinc-900 perspective-dramatic">
                    <span className=" text-center z-10">POWERFUL</span> 
                    
                   
                    {/* <div className="absolute left-1/2 top-30  md:mt-6 h-10  w-[50%]
                        bg-gradient-to-b  to-zinc-600 blur-md
                                [transform:rotateX(80deg)_scaleX(1.8)]
                                    -translate-x-1/2  blur- opacity-"></div> */}

{/*                     
                    <div className="absolute left-1/2 top-full mt-4 h-2 w-full
                                    -translate-x-1/2 bg-purple-400 blur-3xl opacity-30"></div> */}
                </div>

                 <div className="md:text-zinc-400 text-zinc-400 mt-6 md:mt-4 text-xs md:text-lg text-center"> We build web experiences that don't just look good — they perform even better.</div>

                 {/* Button */}
                 <div className="flex mt-15 gap-12">
                    <button className="text-white text-xl">
                        Get Started
                    </button>
                    
                    <div className="px-8 py-2 text-xl rounded-2xl text-white bg-zinc-800">
                        Experience the Power
                    </div>
                 </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Hero