import React from "react"
import ExpertiseData from "./ExpertiseData"
// import "./App.css";

export default function Projects(props){
  // let uf=ExpertiseData.map(data=>console.log(data))
  // console.log(uf.title)
  let [projectData,setProjectData]=React.useState(ExpertiseData)
 let details=projectData.map((data)=>{
   return (
    <div className="project" key={data.id} style={{border:props.whiteBackground? "2px solid black" :"2px solid white",backgroundColor:props.whiteBackground? "white": "rgba(18, 18, 18, 0.85)", color:props.whiteBackground? "black":"white",boxShadow:props.whiteBackground? " 1px 1px 4px 3px black": "1px 1px 4px 3px white"}}>
   <h2 className="project-title">{data.title}</h2>
   <div>
   <p className="description">{data.description}</p>
   <p className="project-github"><span>Github:</span><a href={data.github} style={{color:props.whiteBackground? "darkblue":"darkcyan"}}target="_blank">{data.github}</a></p>
   <p className="project-live"><span>Live:</span><a href={data.live} target="_self" style={{color:props.whiteBackground? "darkred":"darkgoldenrod"}}>{data.live}</a></p>
   <p className="technologyUsed">{data.technologyUsed.map((item)=>{
     return <span className="project-technology" style={{color:props.whiteBackground? "black":"white"}}>{item}</span>
   })}</p> 
      </div>
  </div>
   )
 })
//  rgb(221, 221, 221)
  return (
<div>
  <h1 className="projects-title">Featured Projects</h1>
  <div className="projects-wrapper">
  {details}
  </div>
</div>
  )
}