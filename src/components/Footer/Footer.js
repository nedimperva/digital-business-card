import React from 'react'
import "./Footer.css"
import GitHub from '../../images/icons/GitHub.svg';
import Facebook from '../../images/icons/Facebook.svg';
import Instagram from '../../images/icons/Instagram.svg';
import Twitter from '../../images/icons/Twitter.svg';

function Footer() {
  return (
    <div className="footer">
        <a href="https://github.com/nedimperva" target="_blank" > <img src={GitHub} alt="" />    </a>
        <a href="https://instagram.com/nedimperva" target="_blank" > <img src={Instagram} alt="" /> </a>
        <a href="https://twitter.com/nedimperva" target="_blank" > <img src={Twitter} alt="" />   </a>
        <a href="https://facebook.com/nedimp" target="_blank" > <img src={Facebook} alt="" />  </a>
       </div>
  )
}

export default Footer
