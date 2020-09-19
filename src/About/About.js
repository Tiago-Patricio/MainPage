import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
        return (
           <>
               <div className="selectAll">  

                        <div className="selective">
                       <img className="info1" src="/images/info.PNG" alt=""/> 
                       <img className="picture1" src="/images/avatar.JPG" alt=""/>
                       </div>

                       
                     

                     
                 </div>
               <img className="pcIcon" src="/images/pcIcon.PNG" alt=""/>
               <img className="pcIcon1" src="/images/designPc.PNG" alt=""/>
               <img className="pcIcon2" src="/images/cameraIcon.PNG" alt=""/>
               <div className="backgroundRectangle"></div>
               
               <div>
          <img className="PageName1" src="/images/tiagopatricioblue.PNG" alt=""/>
       </div>
       <Link to="/moreabout">
        <a className="buttonMore"> More </a>
        </Link>
               </>
                )
}

export default About;