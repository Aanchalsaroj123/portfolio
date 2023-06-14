import React from 'react'
import "./myskills.css"
import Cim from "../../img/cim.png"
import Uiux from "../../img/uiuxl.png"
import Webd from "../../img/webdev.jpg"
import Webdes from "../../img/webdesign.png"
import Coding from "../../img/coding2.png"

const Myskills = (props) => {
    return (
        <div className='m-container'>
            <div className="m-container1"style={{background:props.mode==='dark'?'linear-gradient(to right,#401553,#000000 )':'linear-gradient(to right,#d36b6d, #ffffff)'}} >
                <div className="m-container1new">
                    <div className="main-headings" style={{color:props.mode==='dark'?'white':'black'}}>
                        <h2>My</h2>
                        <h1>Projects</h1>
                    </div>
                    <div className="line" style={{background:props.mode==='dark'?'white':'black',width:props.mode==='dark'?'0.1px':'0.5px'}}>
                    </div>
                    <div className="main-headings2">
                        <ul className="skills-list" >
                            <li><span className="click-finger" style={{color:props.mode==='dark'?'white':'black'}}>&#9755;</span><a href="https://aanchalsaroj123.github.io/portfolio/" style={{ color: props.mode === 'dark' ? '#dea4f9' : 'black' }}>Portfolio Website</a></li>
                            <li><span className="click-finger" style={{color:props.mode==='dark'?'white':'black'}}>&#9755;</span><a href="https://aanchalsaroj123.github.io/weather_App/" style={{ color: props.mode === 'dark' ? '#dea4f9' : 'black' }}>Weather App</a></li>
                            <li><span className="click-finger" style={{color:props.mode==='dark'?'white':'black'}}>&#9755;</span><a href=" https://aanchalsaroj123.github.io/basic-calculator/" style={{ color: props.mode === 'dark' ? '#dea4f9' : 'black' }}>Calculator</a></li>

                        </ul>
                    </div>
                </div>
                <div className="m-container2new">
                    <img className='codingimg' src={Coding} alt="" />
                </div>

            </div>
            <div className="m-bg" style={{color:props.mode==='dark'?'white':'black', background: props.mode === 'dark' ? 'black' : 'white', boxShadow: props.mode === 'dark' ? '0.5px 0.5px 5px #7d7d7d' : '2px 2px 10px #7d7d7d' }}>
                <div className="m-circle1">
                    <div className="m-circle">
                        <img className='image' src={Cim} alt="" />
                        <p className="para"style={{color:props.mode==='dark'?'#eddcfb':'grey'}}>Proficient in C++ programming language with strong knowledge of its syntax and features.</p>
                        <h2 className='headin-skills'>C++</h2>
                    </div>
                    <div className="m-circle">
                        <img className='image' src={Webd} alt="" />
                        <p className="para"style={{color:props.mode==='dark'?'#eddcfb':'grey'}}>Proficient in full-stack web development, with expertise in both front-end and back-end technologies, including HTML, CSS, JavaScript, React.js, Node.js, and Express.js.</p>
                        <h2 className='headin-skills'>Web Development</h2>
                    </div>
                </div>
                <div className="m-circle2">
                    <div className="m-circle">
                        <img className='image' src={Webdes} alt="" />
                        <p className="para"style={{color:props.mode==='dark'?'#eddcfb':'grey'}}>Proficient in web design, with expertise in creating visually appealing and user-friendly interfaces using modern design principles, typography, color theory, and layout techniques.</p>
                        <h2 className='headin-skills'>Web Design</h2>
                    </div>
                    <div className="m-circle">
                        <img className='image' src={Uiux} alt="" />
                        <p className="para"style={{color:props.mode==='dark'?'#eddcfb':'grey'}}>Proficient in UI/UX design, combining a deep understanding of user behavior with a keen eye for aesthetics to create intuitive and engaging user interfaces that enhance the overall user experience.</p>
                        <h2 className='headin-skills'>UI/UX</h2>
                    </div>
                </div>
            </div>
            <div className="m-container2"style={{background:props.mode==='dark'?'black':'white'}}>
            </div>
        </div>
    )
}

export default Myskills
