import Hero from "./Components/Hero"
import { useEffect } from "react"
import Navbar from "./Components/Navbar"
import {motion, useMotionTemplate,useMotionValue, animate, useAnimate} from "motion/react"

const COLORS = ["#0A2F85","#7E183D","#3B634B","#835BE2"]

function App() {

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
    className="h-screen w-screen flex flex-col relative overflow-hidden -z-20 ">
        <Navbar/>
        <Hero/>
    </motion.div>
  )
}

export default App
