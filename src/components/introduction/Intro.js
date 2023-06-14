import React from 'react'
import './Intro.css'
// import Me from "../../img/Me.png"
import Me from "../../img/hello.png"
const Intro = (props) => {
  return (
    <div className='in'>
     <div className="in-left">
        <div className="in-left-wrapper">
            <h2 className='in-intro' style={{color:props.mode==='dark'?'white':'black'}}>Hello, My name is</h2>
            <h1 className='in-name' style={{color:props.mode==='dark'?'white':'black'}}>Aanchal Saroj</h1>
            <div className="in-title">
            <div className="in-title-wrapper" >
              <div className="in-title-item" style={{color:props.mode==='dark'?'#d4afe4':'#d36b6d'}}>Web Developer</div>
              <div className="in-title-item" style={{color:props.mode==='dark'?'#d4afe4':'#d36b6d'}}>UI/UX Designer</div>
              <div className="in-title-item" style={{color:props.mode==='dark'?'#d4afe4':'#d36b6d'}}>Photographer</div>
             </div>
          </div>
          <p className="in-desc" style={{color:props.mode==='dark'?'white':'black'}}>
         I am currently on a transformative journey, pursuing B.Tech degree in Information Technology from the esteemed Netaji Subhas University of Technology (NSUT). As a passionate learner in the field of IT, I am wholeheartedly dedicated to expanding my knowledge and skills.
          </p>
          <p className="in-desc2" style={{color:props.mode==='dark'?'white':'black'}}>
          IT undergrad at NSUT. </p>
        </div>
        </div>
     <div className="in-right">
        <div className="in-bg" style={{background:props.mode==='dark'?'#401553':'#d36b6d'}}></div>
    <img src={Me} className='in-img' alt='' />
     </div>
    </div>
  )
}

export default Intro