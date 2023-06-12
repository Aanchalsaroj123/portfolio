import React, { useState } from 'react'
import "./contact.css"
import Phone from "../../img/phone.png";
import Email from "../../img/mail.png";
import Github from "../../img/github.png";
import Leetcode from "../../img/leetcode.png";
import Address from "../../img/address.png";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = (props) => {
  const formRef = useRef();
  const [done, setDone] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_41ed6cb', 'template_dff0xvf', formRef.current, 'xTb9Byhabu2tta49V')
      .then((result) => {
        console.log(result.text);
        setDone(true)
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="cnt" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <div className="cnt-bg"style={{background:props.mode==='dark'?'#401553':'#d36b6d'}}></div>
      <div className="cnt-wrapper">
        <div className="cnt-left">
          {/* <h1 className="cnt-title">Let's Connect</h1> */}
          <h1 className="cnt-title">Let's Connect</h1>
          <div className="cnt-info">
            <div className="cnt-info-item">
              <img className="cnt-icon" src={Email} alt="" />
               <p style={{ textDecoration: 'none',color: props.mode === 'dark' ? 'white' : 'black'}} >anchalsaroj2001@gmail.com</p>
                {/* <p style={{ textDecoration: 'none',color: props.mode === 'dark' ? 'white' : 'black'}} >anchalsaroj2001@gmail.com</p> */}
            </div>
            <div className="cnt-info-item">
              <img src={Phone} alt="" className="cnt-icon" />
              <a href="https://www.linkedin.com/in/aanchal-saroj-13b756222/" className="textdeco">
                <p style={{ textDecoration: 'none',color: props.mode === 'dark' ? 'white' : 'black'}}>LinkedIn</p>
              </a>
            </div>
            <div className="cnt-info-item">
              <img src={Github} alt="" className="cnt-icon" />
              {/* <a href="https://github.com/Aanchalsaroj123" className="textdeco"> */}
              <a href="https://github.com/Aanchalsaroj123" className="textdeco">
                <p style={{ textDecoration: 'none',color: props.mode === 'dark' ? 'white' : 'black'}}>GitHub</p>
              </a>
            </div>
            <div className="cnt-info-item">
              <img src={Leetcode} alt="" className="cnt-icon" />
              <a href="https://leetcode.com/anchalsaroj12345/" className="textdeco">
                <p style={{ textDecoration: 'none',color: props.mode === 'dark' ? 'white' : 'black'}}>LeetCode</p>
              </a>
            </div>
            <div className="cnt-info-item">
              <img className="cnt-icon" src={Address} alt="" />
              Delhi,India
            </div>
          </div>
        </div>
        <div className="cnt-right">
          <p className="cnt-desc">
            <b>Get in touch..</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button style={{background:props.mode==='dark'?'#401553':'#d36b6d'}}>Submit</button>
            {done && "Thank you..."}
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact