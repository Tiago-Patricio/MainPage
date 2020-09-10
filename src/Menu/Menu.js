import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom'


const Menu = () => {

    

    return (
        <>
        <div className="Buttons">
        <div>
            <Link to="/about">
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
    </div>

    <a className="PageName" href="/MainPage"> TIAGO PATRICIO </a>
    </>
)
};

export default Menu;