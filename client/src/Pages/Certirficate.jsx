import React from 'react'
import "./Css/certificate.css"
import cerlogo from "./../assets/cerlogo.png"
import hero from "./../assets/enterprise-hero.png"

function Certirficate() {
  return (
    <div className=' bg-black'>
      <header class="header">
        <nav class="gohackathon">
            <img class="img1" src={`${cerlogo}`} alt="go hackathon"/>
        </nav>
    </header>
    <div class="home-content">
        <div class="btn">
        <a href="webinar.html"> <button class="btn-box">Webinar Certificate</button></a>
           <a href="internship.html"> <button class="btn-box">Internship Certificate</button></a>
           <a href="course.html"> <button class="btn-box">Course Certificate</button></a>
            <a href="#"> <button class="btn-box"></button></a> 
           </div>
           <div class="study">
           <img src={hero}/>
           </div>
    </div>
      <footer>
        <div class="footerContact">
            <h2>Contact Us</h2>
                <a href=""><i class='bx bxs-map'>  H-87,Sector-63, Noida,U.P, 201301</i></a>
                <a href=""><i class='bx bxs-phone-call'>  +91 7678476713</i></a>
                <a href=""><i class='bx bxs-envelope'>  info@gohackathon.in</i></a>
            </div>
      </footer>
    </div>
  )
}

export default Certirficate