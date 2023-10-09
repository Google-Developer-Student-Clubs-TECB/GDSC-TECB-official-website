import React from 'react'
import "./home.css"
import arrow from "../../assets/Images/right-arrow.png";
import communityImg from "../../assets/Images/community-img.png"

function Home() {
  return (
    <div className="homepage-hero-sec">
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
</div>
  )
}

export default Home