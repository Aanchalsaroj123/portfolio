import React from 'react'
import "./about.css"
// import Img2 from "../../img/img-2.png"
import Img3 from "../../img/img3.png"

const About = (props) => {
  return (

    <div className="abt" style={{color:props.mode==='dark'?'white':'black'}}>
    <div className="abt-left">
      <div className="abt-card bg" style={{background:props.mode==='dark'?'#401553':'#d36b6d'}}></div>
      <div className="abt-card">
        <img
          src={Img3}
          alt=""
          className="abt-img"
        />
      </div>
    </div>
    <div className="abt-right">
      <h1 className="abt-title">About Me</h1>
      <p className="abt-sub">
      I am passionate about full-stack web development and have honed my skills in creating dynamic and user-friendly websites.
      I am also well-versed in Data Structures and Algorithms (DSA). I understand the importance of efficient algorithms in developing optimized solutions, and I constantly strive to enhance my problem-solving skills. With a strong foundation in DSA, I am able to tackle complex coding challenges with confidence.
      </p>
      <p className="abt-desc">
      Apart from my technical skills, I have a deep passion for painting and photography. I believe that art is a beautiful medium for self-expression, and it allows me to explore my creativity outside the realm of coding. I enjoy capturing moments through the lens and experimenting with various styles and techniques in both painting and photography.
     <br/>
     Overall, I am a dedicated and enthusiastic individual who is passionate about technology, web development, and the arts. I am constantly seeking new opportunities to learn and grow, and I look forward to collaborating with like-minded individuals and organizations to create meaningful and impactful projects.
      </p>
      
          <p className="abt-award-desc">
          Thank you for taking the time to get to know me.
          </p>
    
    </div>
  </div>

  )
}

export default About