import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
        return (
           <>
           <img className="pcIcon" src="/images/about icons.PNG" alt=""/>
               <div className="selectAll">  

                        <div className="selective">
                       <img className="info1" src="/images/info.PNG" alt=""/> 
                       <img className="picture1" src="/images/avatar.JPG" alt=""/>
                       </div>

                       
                     

                        
                 </div>
               
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