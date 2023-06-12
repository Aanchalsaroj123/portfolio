import React from 'react'
import "./navbar.css"
import Sun from "../../img/Sun.png";
import Moon from "../../img/Moon.png";
const Navbar = (props) => {
  return (
    <div>
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={props.togglemode}
        style={{left: props.mode==='dark'? 25 : 0 }}
      ></div>
    </div>
    </div>
  )
}

export default Navbar