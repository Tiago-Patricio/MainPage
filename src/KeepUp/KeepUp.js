import React from 'react';
import './KeepUp.css';



const KeepUp = () => {

    return (
        <>
       

        <div className="Main">

        <img className="contactsTitle" src="/images/contacts.PNG" alt=""/>

         <div className = "gitHub">  
            <img className = "imgPost1"  src = "/images/github.png" alt = ""/>
        <br/><br/>
        <a className = "button4" href = "https://github.com/Tiago-Patricio" target="_blank"> Go to GitHub </a> 
        </div>
     
   
        <div className = "linkedin" >
            <img className = "imgPost1" src = "/images/linkedin.png" alt = ""/>
        <br/> < br/>
        <a className = "button5"
        href = "https://www.linkedin.com/in/tiago-patricio/" target="_blank"> Go to linkedIn </a> 
        </div>

        <div className = "instagram" >
        <img className = "imgPost1" src = "/images/instagram.png" alt = ""/>
        <br/> < br/>
         <a className = "button6"
         href = "https://www.instagram.com/itiagopatricio/" target="_blank"> Go to instagram </a> 
        </div>
        
        <img className="footerUp" src="/images/footer.png" alt=""/>
        <div className="backgroundRectangleUp"></div>

        
        </div>
        </>
        
    )


}

export default KeepUp;