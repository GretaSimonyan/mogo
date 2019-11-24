import React from 'react';
import "./style.css";
import ImagesInner from "../ImagesInner"

function Container(){
    return(
        <div className="Container">          
                <div className='section'>
                    <div className="section_suptitle">What we do</div>
                    <div className='section_title'>STORY ABOUT US</div>                
                </div>

                <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, modi eius enim doloremque, voluptatum sunt nam libero<br/>
                debitis blanditiis temporibusveniam vitae facilis nihil consectetur nostrum reprehenderit
                </p>
                <ImagesInner/>
        </div>  
    )
}

export default Container