import React from 'react';
import "./style.css";

function Header() {
    return(
        <div className = 'Header'>
            <div className="container"> 
                <div className="logo">MoGo</div> 
                <ul className="menu">
                    <li><a className="menu_link" href="">About</a></li>
                    <li><a className="menu_link" href="">Service</a></li>
                    <li><a className="menu_link" href="">Work</a></li>
                    <li><a className="menu_link" href="">Blog</a></li>
                    <li><a className="menu_link" href="">Contact</a></li>   
                </ul>
            </div>  
        </div>
    );
};

export default Header;