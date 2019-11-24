import React from 'react'
import './style.css';
import MoGo from '../../assets/images/MoGo.jpg';

function Intro(){
    return(
        <div className="Intro" style={ { backgroundImage: `url(${MoGo})` } }>
            <div className="container">
                <div className="intro-inner">
                    <h2 className="intro_suptitle">Creative Template</h2>
                    <h1 className="intro_title">Welcome to MoGo</h1>
                    <a className="btn" href="#">LEARN MORE</a>

                    <div className="slider">
                        <div className="slider-item"> <span>01 </span> INTRO</div>
                        <div className="slider-item"> <span>02 </span> WORK</div>
                        <div className="slider-item"> <span>03 </span> ABOUT</div>
                        <div className="slider-item"> <span>04 </span> CONTACTS</div>
                    </div>  
                </div>
            </div> 
        </div>
    )
}

export default Intro;