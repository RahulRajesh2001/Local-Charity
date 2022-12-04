import React from 'react'
import appStore from '../../images/appStore.png'
import playStore from '../../images/playStore.png'
import "./footer.css"
import {Link} from "react-router-dom"


function Footer() {
  return (
   
<footer id="footer">
    <div class="leftfooter">
        <h4>Download app</h4>
        <p>Download app for Android and IOS moblie phone</p>
        <Link to="">
        <img src={playStore} alt="playstore"/></Link>
        <Link to="">
        <img src={appStore} alt="appstore"/>
        </Link>
        
    </div>

    
    <div class="midfooter">

      <h5>NO ONE HAS EVER BECOME POOR BY GIVING.</h5>
        <p>Copyrights 2023 &copy; localcharity org</p>
    </div>
    <div class="rightfooter">
      <h4>Follow Us</h4>
      <a href="www.instagram.com">Instagram</a><br/>
      <a href="www.facebook.com">Facebook</a><br/>
      <a href="www.youtube.com">Youtube</a>

    </div>
</footer>

  )
}

export default Footer
