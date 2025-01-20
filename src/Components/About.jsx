import React from "react"


export default function About(){
  return(
<div className="About-wrapper">

  <div className="about-left-container">
      <div className="profile-container">
      <img src="/ashishProfile.jpg" alt="ashish-profile"/>
      </div>
      <div className="action-button">
      <a href="#contact">
      <button id="hire-me-btn" className="all-action-btns">Hire Me</button>
      </a>
      
      <a href="https://drive.google.com/file/d/11jLQayr-pvsFr0lnVYrnQ1kDyUrEnOFZ/view?usp=sharing" target="_self">
      <button id="see-resume-btn" className="all-action-btns">See Resume</button>
      </a>
      </div>
  </div>

  <div className="about-right-container">
  <div className="first-intro">
   <h1>Namaste&#128591;</h1>
   <h1>It's Ashish Adhikari</h1>
  </div>
  <div className="second-intro">
    <p>I am pursuing a Bachelor's degree in Computer Applications under Tribhuvan University. As an aspiring IT professional, my interests continue to evolve, encompassing areas such as graphic design,freelancing, frontend development, and beyond. I embrace the dynamic nature of the tech field and believe in continuous growth and adaptation.&#x1F680;
    </p>
    <p className="third-intro">Childhood Story:As a child, I got an electric shock when I touched the bulky desktop screen &#x26A1;</p>

  </div>
  <div className="social-media">
    <a href="https://www.youtube.com/@NirantarKhabardari" target="_blank">
   <img src="/youtube-brands-solid.svg"alt="youtube-logo" width="40px" height="40px"/>
    </a>
    <a href="https://www.linkedin.com/in/ashishadhikari11/" target="_blank"><img src="/linkedin-brands-solid.svg" alt="linkedin-logo" width="40px" height="40px"/></a>
    <a href="https://www.facebook.com/adhikariashish11" target="_blank"><img src="/facebook-brands-solid.svg" alt="facebook-logo" width="40px" height="40px"/></a>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adhikaryashish005@gmail.com" target="_blank"><img src="/envelope-solid.svg" alt="Email-logo" width="40px" height="40px"/></a>
    
  </div>

</div>

    
    
</div>




  )
}