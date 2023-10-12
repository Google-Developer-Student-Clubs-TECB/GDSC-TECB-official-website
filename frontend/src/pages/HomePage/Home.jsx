import React from 'react'
import "./home.css"
import arrow from "../../assets/Images/right-arrow.png";
import communityImg from "../../assets/Images/community-img.png";
import about from "../../assets/Images/about-us.png";
// import connect from "../../assets/Images/connect.png";
// import grow from "../../assets/Images/grow.png";
// import learn from "../../assets/Images/learn.png";
import email from "../../assets/Images/newsletter-email.png";

function Home() {
  return (
    <div className="homepage-sec">
   <div className="homepage-hero-sec-content">
    <div className="homepage-hero-sec-content-parts">
    <div className="homepage-hero-sec-content-ele">
      Simplify Learning, amplify connections
    </div>
    <div className="homepage-hero-sec-content-info">
      Enhance Your Tech Journey with Google Developer Student Club TECB
    </div>
    <button class="community-btn">Join Community <img src={arrow} alt="arrow"/></button>
    </div>
    <div className="homepage-hero-sec-content-img">
      <div className="homepage-hero-sec-content-img-item"><img src={communityImg} alt="Community Image" width="503px" height="313px"/>
      </div>
    </div>
  </div>
  <div className="hompage-about-sec">
    <div className="homepage-about-sec-content">
      <div className="about-us">About Us</div>
      <div className="about-content">Google Developer Student Clubs TECB is a Google Developers program, catering to university students, with the primary goal of fostering skill up-gradation in cutting-edge technologies and programming. Its mission is to empower students with the latest knowledge and expertise in the ever-evolving tech landscape.</div>
      <div className="about-sec-img">
        <div className="about-image">
          <img src={about} alt="About-us" width="530px" heigt="330px"/>
        </div>
      </div>
    </div>
  </div>
  {/* What we do sec*/}
  {/* <div className="homepage-what-we-do-sec">

  // </div> */} 
  <div className="homepage-newsletter-sec">
    <div className="homepage-newsletter-sec-content">
      <div className="homepage-newsletter-sec-content-img">
      <img src={email} alt="Email Image" width="100px" height="100px"/>
    </div>
    <div className="homepage-newsletter-content-heading">Subscribe To Our Nwesletter</div>
    <div className="homepage-newsletter-content-text">
      Get event, technical workshops and blogs updates every week!
    </div>
    <div className="homepage-newsletter-content-button">
      <span class="newsletter-email"> <button class="email-btn">Enter email</button> <button class="subs-btn">Subscribe</button></span>
    </div>
  </div>
  </div>
</div>

  )
}

export default Home