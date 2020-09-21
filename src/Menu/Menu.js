import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';



const Menu = () => {

   

    return (
        
        <>
        
    
        <nav id="navbar">
       
    
        <div>
            <Link to="/">
        <a className="button1"> Home </a>
        </Link>
        </div>
        <div>
            <Link to="/portfolio">
        <a className="button2"> Portfolio </a>
        </Link>
        </div>
        <div>
            <Link to="/contacts">
        <a className="button3"> Contacts </a>
        </Link>
       </div>
 

       <img className="PageName" src="/images/tiagopatriciowhite.PNG" alt=""/>
    </nav>
    
    </>
)
};

export default Menu;