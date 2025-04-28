import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"

function App() {


  return (
    <div className="h-screen w-screen flex flex-col relative overflow-hidden -z-20 bg-zinc-950">
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default App
