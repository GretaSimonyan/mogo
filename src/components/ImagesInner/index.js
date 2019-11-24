import React from 'react';
import "./style.css";
import img1 from "../../assets/images/Untitled-1.jpg";
import img2 from "../../assets/images/Untitled-2.jpg";
import img3 from "../../assets/images/Untitled-3.jpg";


function ImagesInner(){
    return(
        <div className="ImagesInner">
            <div className="about-img">
                <div>
                    <img src={img1}/>
                </div>
            </div>
            <div className="about-img">
                <div>
                    <img src={img2}/>
                </div>
            </div>
            <div className="about-img">
                <div>
                    <img src={img3}/>
                </div> 
            </div>                    
        </div>
    )
}
export default ImagesInner