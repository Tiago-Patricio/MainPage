import React from 'react';
import './MainPage.css';


const MainPage = () => {
       
    const videoSrc = './videos/felinuxHackathon.mp4'

    return(
        <div className="Video">
            <video autoPlay loop fadeout
            style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1",
            }}
            src={videoSrc}/>
        </div>

)
}





export default  MainPage;
