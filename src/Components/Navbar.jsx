import React from 'react'
import {motion} from "motion/react"

function Navbar() {
  return (
    <div className=' w-8/12 md:w-6/12 flex items-center justify-between  mt-6 font-["Neue_Montreal"] rounded-4xl px-5 py-1  mx-auto  bg-white/80 backdrop:backdrop-blur-2xl border-[0.1px] border-neutral-400' >
        <div>
            Logo
        </div>
        
        <div className='md:flex hidden  items-center gap-8 text-sm'>
            {
                ["Features","Resources","Pricing"].map((ele, index) => (
                    (
                        <motion.div 
                        key={index}
                        className='h-6 overflow-hidden cursor-pointer relative'>
                            <motion.div
                             initial={{y:0}}
                            //  transition={{duration:0.3, ease:"easeIn"}}
                            whileHover={{
                                y: "-100%",
                                transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
                              }}
                            className='flex flex-col '>
                                <a className='cursor-pointer'>{ele}</a>
                                <a>{ele}</a>
                            </motion.div>
                        </motion.div>
                    )
                ))
            }
        </div>

        <div>
            <button className='px-6 py-2 cursor-pointer bg-zinc-900 rounded-full text-white'>
                Signup
            </button>
        </div>
    </div>
  )
}

export default Navbar