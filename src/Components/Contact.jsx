import React from "react"
import emailjs from '@emailjs/browser';

export default function Contact(props){
  const form1=React.useRef()
  
  const [formData,setFormData]=React.useState({visitorName:"",visitorEmail:"",visitorMessage:""})
  function handleChange(event){
   setFormData(prevFormData=>{
     return {
       ...prevFormData,
       [event.target.name]:event.target.value
     }
   })
  }

  const namePattern=/[\d$#^&*()!]|(?:\d+\.\d+)/
  const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

   function handleSubmit(event){
    event.preventDefault()

    let formName=document.querySelector(".form-name")
    let formEmail=document.querySelector(".form-email")
    let formMessage=document.querySelector(".form-message")

  let nameStatus=false
  let emailStatus=false
  let messageStatus=false

    // name validate
    if(formData.visitorName==="" || namePattern.test(formData.visitorName) ){
      formName.style.border="2px solid red"
    }
    else{
      formName.style.border="2px solid green"
      nameStatus=true
    }
    // email validate
    if(formData.visitorEmail==="" || !emailPattern.test(formData.visitorEmail)){
      formEmail.style.border="2px solid red"
    }
    else{
      formEmail.style.border="2px solid green"
      emailStatus=true
    }
    // message  validate
    if(formData.visitorMessage===""){
      formMessage.style.border="2px solid red"
    }
    else{
      formMessage.style.border="2px solid green"
      messageStatus=true
    }
    if(nameStatus && emailStatus && messageStatus){
      emailjs
      .sendForm('service_uwdxeww', 'template_rgysvyb', form1.current, {
        publicKey: 'pAjlIZZbeWvs1vCOJ',
      })
      .then(
        () => {
          alert("Thank you for your message")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
     setFormData({visitorName:"",visitorEmail:"",visitorMessage:""})
     formName.style.border =""
      formEmail.style.border=""
      formMessage.style.border=""
    }
   }
  return (
    <div>
      <h1 className="contact-title">Contact</h1>
    <div className="contact-wrapper">
    <form onSubmit={handleSubmit} noValidate ref={form1}>
    <div>
      <input 
      type="text" 
      placeholder="Your good name"
      onChange={handleChange} 
      name="visitorName" 
      value={formData.visitorName}
      className="form-name"
      />
    </div>

    <div>
      <input
      type="email"
      placeholder="Email address"
      onChange={handleChange}
      name="visitorEmail"
      value={formData.visitorEmail}
      className="form-email"
      />
      </div>
      
      <div>
        <textarea
        placeholder="Leave a message || Say hello&#128075;"
        name="visitorMessage"
        value={formData.visitorMessage}
        onChange={handleChange}
        rows="6"
        className="form-message"
        />
        </div>
        <button>Send</button>
    </form>
      </div>
      </div>
  )
}