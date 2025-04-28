import {React, useEffect} from 'react'
import {motion, useMotionTemplate,useMotionValue, animate} from "motion/react"

const COLORS = ["#0A2F85","#7E183D","#3B634B","#835BE2"]

function Hero() {
    const colors = useMotionValue(COLORS[0])
    
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${colors})`

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
    style={{backgroundImage}} 
    className='w-full relative -z-20 h-full flex flex-col mt-22'>
        
        <div className="w-11/12 flex flex-col items-center mx-auto ">
            {/* Banner */}

            <span className="flex w-[20%] md:w-[5.5%] group  items-center bg-white/40 gap-2 px-1 rounded-full">
                <div className="h-2 w-2 rounded-full ml-2 group-hover:blur-xs transition-all duration-300 bg-green-500"></div>
                <div className="text-white font-thin">Beta</div>
            </span>

            {/* Hero-Text */}
            <div className="mt-10 flex flex-col items-center">
                <div className="text-4xl md:text-8xl text-center font-['Neue_Montreal'] bg-clip-text text-transparent bg-gradient-to-b
                 from-zinc-200 to-zinc-700">Not Just Pretty,</div>

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
                 <div className="flex mt-15 gap-10 md:gap-22">
                    <button className="text-neutral-300 text-md md:text-xl">
                        Get Started
                    </button>
                    
                    <div className="relative group cursor-pointer">

                        {/* <div className="absolute inset-0 bg- rounded-2xl 
                        group-hover:blur-xl transition-all duration-300
                        bg-[radial-gradient(50%_50%_at_50%_0%,#0A2F85,#835BE2)] blur-lg  -z-10"></div> */}


                        <motion.div 
                        style={{ border, boxShadow}}
                        className="px-8 py-3 text-lg rounded-2xl text-white bg-zinc-800">
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