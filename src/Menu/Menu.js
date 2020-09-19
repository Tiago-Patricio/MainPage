import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';



const Menu = () => {

   

    return (
        
        <>
        
    
        <nav id="navbar">
       
    
        <div>
            <Link to="/">
        <a className="button1"> About </a>
        </Link>
        </div>
        <div>
            <Link to="/portfolio">
        <a className="button2"> Portfolio </a>
        </Link>
        </div>
        <div>
            <Link to="/keepup">
        <a className="button3"> KeepUp </a>
        </Link>
       </div>
 

       <img className="PageName" src="/images/tiagopatriciowhite.PNG" alt=""/>
    </nav>
    
    </>
)
};

export default Menu;