import React from "react"
import './index.css'
import './upto480.css'
import './upto768.css'
import './upto1024.css'
import './upto1200.css'
import './morethan1201.css'
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

  const [isExpand,setIsExpand]=React.useState(false)
  function hamburgerClick(){
    setIsExpand((prevstate)=>!prevstate)
 }
function ashish(){
  location.reload()
}

  return (
    <div className="boss" >
    
      {/* for max-width:480px */}
    <div className="hamburger" style={{backgroundColor:WhiteBackground? "#eeeff1": "rgba(40, 45, 53, 0.677)", color:WhiteBackground? "black":"white"}}>
    <div onClick={ashish}><p className="ashish"><strong>ASHISH</strong></p></div>
    <div className="hamburger-btn" onClick={hamburgerClick}>{WhiteBackground? <img src="/black-bar.svg" alt="hamburger-black" width="25px" height="25px"/> : <img src="./white-bar.svg" alt="hamburger-white" width="25px" height="25px"/>}</div>
 
    </div>
    <div className="hamburger-expand"  style={{backgroundColor:WhiteBackground? "#eeeff1": "rgba(40, 45, 53, 0.677)", color:WhiteBackground? "black":"white", display:isExpand? "block":"none"}}>
    <nav>
     <a href="#about"style={{color:WhiteBackground? "black":"white", display:isExpand? "block":"none"}} onClick={hamburgerClick}>About</a>
     <a href="#expertise" style={{color:WhiteBackground? "black":"white",display:isExpand? "block":"none"}} onClick={hamburgerClick}>Expertise</a>
     <a href="#projects" style={{color:WhiteBackground? "black":"white",display:isExpand? "block":"none"}} onClick={hamburgerClick}>Projects</a>
     <a href="#contact" style={{color:WhiteBackground? "black":"white",display:isExpand? "block":"none"}} onClick={hamburgerClick}>Contact</a>
     <div onClick={modeChange}>{WhiteBackground? <img src="./moon-solid.svg" alt="dark-mode.svg" width="25px" height="25px"/>:<img src="./sun-solid.svg" alt="dark-mode" width="25px" height="25px" className="light_mode"/>}
    </div>
  </nav>
    </div>
    

    {/* hamburger ends here */}

  <div className="nav-bar" style={{backgroundColor:WhiteBackground? "#eeeff1": "rgba(40, 45, 53, 0.677)", color:WhiteBackground? "black":"white"}}>
    <div onClick={modeChange}>{WhiteBackground? <img src="./moon-solid.svg" alt="dark-mode.svg" width="25px" height="25px"/>:<img src="./sun-solid.svg" alt="dark-mode" width="25px" height="25px" className="light_mode"/>}
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
