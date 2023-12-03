import React, { useState } from "react";
import "../styles/Home.scss";
// import bgimage from "../../images/mesthiri.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faCheck, faHeart, faIndianRupeeSign, faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays, faCommentDots } from "@fortawesome/free-regular-svg-icons";


const home=function(){
  // const [needs, set_needs] = useState([{
  //     image:"/images/mesthiri.jpg",
  //     name:"Mason",
  //     description:"Urgently require mason for concrete tank construction",
  //     date:"12-07-2023",
  //     location:"Aroor",
  //     total_views:"1M"
  //   },{
  //     image:"/images/maruti-800.jpg",
  //     name:"Maruti 800",
  //     description:"Maruti 800 available at low prize near kakkanad",
  //     date:"23-02-2024",
  //     location:"Kakkanad",
  //     total_views:"2M"
  //   }
  // ]);

  const [needs, set_needs] = useState([{
      image:"/images/pet_bed_1.jpg",
      name:"Cozy Pre-Loved Pet Bed Seeking New Furry Friend",
      description:"Calling all pet lovers with a big heart! We have a gently used pet bed that's seeking a new home for a furry companion in need. This bed is in excellent condition.",
      date:"12-11-2023",
      location:"123 High Street, Woodford Green, East London",
      total_views:"1.2K"
    },{
      image:"/images/trike.jpg",
      name:"Tricycle Seeking New Adventures - Needs a New Home",
      description:"Ready for new memories! tricycle is in great condition and eager for a new journey. This tricycle is now seeking a new home since the kids have outgrown their riding days.",
      date:"23-10-2023",
      location:"123 Main Street, Anytown, Countyshire",
      total_views:"2M"
    }
  ]);

  
  // const [description, set_description] = useState(["need mesthiri", "need maruti 800"]);
  // const [views, set_views] = useState(["1M", "2M"]);
  return(
    <div className="home_page_container">
      {needs.map((need,idx)=>(
        <div key={idx} className="single_need_container">
          <div className="image_container" style={{ backgroundImage: "url"+"("+need["image"]+")" }}>
            <div className="user_views_container">
              <div className="grid_container">
                <div className="graph"><FontAwesomeIcon icon={faChartSimple}></FontAwesomeIcon></div>
                <div className="total_views">{need["total_views"]}</div>
              </div>
            </div>
            <div className="like_button_container"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></div>
          </div>
          <div className="title_container">{need["name"]}</div>
          <div className="details_container">{need["description"]}</div>
          <div className="date_location"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> {need["location"]}</div>
          <div className="date_location"><FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>  {need["date"]}</div>
          <div className="chat_container">
            <div className="chat_grid">
              <div className="icon"><FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon></div>
              <div className="text">Chat</div>
            </div>
          </div>

        </div>
      ))}
        <div className="plus_button">+</div>
    </div>
  )
}
export default home;