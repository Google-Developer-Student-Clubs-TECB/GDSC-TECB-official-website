import React from 'react'
import './events.css'


let pastCards = [
    {
      key:0,
      image:"./WhatsApp Image 2023-10-09 at 10.29.00_839cde29.jpg",
      link:"#",
      title:"Google Cloud Study Jam 2023 Session",
      session:'Speaker Session',
      date:'9-10-2023'
    },
    {
      key:1,
      image:"./Web-Designing-Course-Syllabus.jpg",
      link:"#",
      title:"Web Developement 2023 Session",
      session:"Speaker Session",
      date:"9-10-2023"
    },
    {
      key:2,
      image:"./WhatsApp Image 2023-10-09 at 10.29.00_839cde29.jpg",
      link:"#",
      title:"AI/ML 2023 Session",
      session:"Speaker Session",
      date:"9-10-2023"
    },
    {
      key:3,
      image:"./WhatsApp Image 2023-10-09 at 10.29.00_839cde29.jpg",
      link:"#",
      title:"AI/ML 2023 Session",
      session:"Speaker Session",
      date:"9-10-2023"
    },
    {
      key:4,
      image:"./WhatsApp Image 2023-10-09 at 10.29.00_839cde29.jpg",
      link:"#",
      title:"AI/ML 2023 Session",
      session:"Speaker Session",
      date:"9-10-2023"
    },
    {
      key:5,
      image:"./WhatsApp Image 2023-10-09 at 10.29.00_839cde29.jpg",
      link:"#",
      title:"AI/ML 2023 Session",
      session:"Speaker Session",
      date:"9-10-2023"
    },
    {
      key:6,
      image:"./WhatsApp Image 2023-10-09 at 10.29.00_839cde29.jpg",
      link:"#",
      title:"AI/ML 2023 Session",
      session:"Speaker Session",
      date:"9-10-2023"
    }
  ]


  let UpcomingCards = [
    {
      key:0,
      image:"./WhatsApp Image 2023-10-09 at 10.29.00_839cde29.jpg",
      link:"#",
      title:"Google Cloud Study Jam 2023 Session",
      session:'Speaker Session',
      date:'9-10-2023'
    },
    {
      key:1,
      image:"./Web-Designing-Course-Syllabus.jpg",
      link:"#",
      title:"Web Developement 2023 Session",
      session:"Speaker Session",
      date:"9-10-2023"
    },
    {
      key:2,
      image:"./WhatsApp Image 2023-10-09 at 10.29.00_839cde29.jpg",
      link:"#",
      title:"AI/ML 2023 Session",
      session:"Speaker Session",
      date:"9-10-2023"
    }
  ]

function Events() {

  
  return (
    <>
      <section className="Upcoming">
        <h1>UpComing Events</h1>
        <div className="flex_item">
        {UpcomingCards.map((data,key)=>{
          return(
            <div className="card" key={key}>
              <img src={data.image} alt="Session Image" />
              {/* card content is here---------------------- */}
              <div className="card_content">
                <a href={data.link} className="Title">
                {/* link with title-------------- */}
                  {data.title}
                </a>
                <p className="Session">
                  {data.session}
                </p>
                <p className="Date">
                  Session date : {data.date}
                </p>
              </div>
            </div>
          )
        })}
          
        </div>
        
      </section>
      <section className="Past">
        <h1>Past Events</h1>
        <div className="flex_item">
          {pastCards.map((data,key)=>{
            return(
              <div className='card' key={key}>
                <img src={data.image} alt="Session Image" />
                {/* card content is here---------------------- */}
                <div className="card_content">
                  <a href={data.link} className="Title">
                  {/* link with title-------------- */}
                    {data.title}
                  </a>
                  <p className="Session">
                    {data.session}
                  </p>
                  <p className="Date">
                    Session date : {data.date}
                  </p>
                </div>
              </div>  
            )   
          })}
        </div>
      </section>
    </>
  )
}

export default Events