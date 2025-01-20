import React from "react"
import './App.css'
import About from "./Components/About"
import Expertise from "./Components/Expertise"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {
   const[WhiteBackground,setWhiteBackground]=React.useState(true)
  function modeChange(){
   setWhiteBackground((prevState)=>!prevState)
  }
  return (
    <div className="boss" >
  <div className="nav-bar" style={{backgroundColor:WhiteBackground? "#eeeff1": "rgba(40, 45, 53, 0.677)", color:WhiteBackground? "black":"white"}}>
    <div  onClick={modeChange}>{WhiteBackground? <img src="./moon-solid.svg" alt="dark-mode.svg" width="25px" height="25px"/>:<img src="./sun-solid.svg" alt="dark-mode" width="25px" height="25px" className="light_mode"/>}
    </div>
   <nav>
     <a href="#about"style={{color:WhiteBackground? "black":"white"}}>About</a>
     <a href="#expertise" style={{color:WhiteBackground? "black":"white"}}>Expertise</a>
     <a href="#projects" style={{color:WhiteBackground? "black":"white"}}>Projects</a>
     <a href="#contact" style={{color:WhiteBackground? "black":"white"}}>Contact</a>
  </nav>
  </div>

  <div id="about" style={{backgroundColor:WhiteBackground? "#eeeff1": "rgba(40, 45, 53, 0.677)", color:WhiteBackground? "black":"white"}}>
     <About/>
  </div>
  <div id="expertise"style={{backgroundColor:WhiteBackground? "white": "rgba(18, 18, 18, 0.85)", color:WhiteBackground? "black":"white"}}>
    <Expertise/>
  </div>
  <div id="projects" style={{backgroundColor:WhiteBackground? "#eeeff1": "rgba(40, 45, 53, 0.677)", color:WhiteBackground? "black":"white"}}>
    <Projects whiteBackground={WhiteBackground} modeChange={modeChange} />
  </div>
  <div id="contact" style={{backgroundColor:WhiteBackground? "white": "rgba(18, 18, 18, 0.85)", color:WhiteBackground? "black":"white"}}>
  {/* ------------------------------------------------------------------rgba(40, 45, 53, 1) */}
    <Contact/>
  </div>
  <div id="footer" style={{backgroundColor:WhiteBackground? "#eeeff1": "rgba(40, 45, 53, 0.677)", color:WhiteBackground? "black":"white"}}>
    <Footer  whiteBackground={WhiteBackground} modeChange={modeChange}/>
   </div>
</div>
  )
}

export default App
