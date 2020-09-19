import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';


const MoreAbout = () => {

    return (
        <>
        <div className="selectInfo">
                          <img className="info3" src="/images/aboutabout.JPG" alt=""/>
                          <img className="info2" src="/images/text about.PNG" alt=""/>
                         </div>
            <img className="footerAbout" src="/images/footer.PNG" alt=""/>
            <div className="moreAboutReactangle"></div>
            <div className="backgroundRectangleMore"></div>

        <Link to="/">
            <a className="buttonLess"> Back</a>
        </Link>
        </>
    )
}

export default MoreAbout;