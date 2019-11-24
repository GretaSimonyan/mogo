import React from "react";
import "./style.css"
import ipad from "../../assets/images/ipad.png";
import iphone from "../../assets/images/iphone.png";


function UniqueDesign(){
    return(
        <section className='UniqueDesign'>
            <div className='feature'>

                <div className='section'>
                    <div className="section_suptitle">For all devices</div>
                    <div className='section_title'>Unique design</div>  
                                  
                </div>

                <div className='devices'>
                    <div className='ipad'><img src={ipad}></img></div>
                    {/* <div className='iphone'> <img src={iphone}></img> </div> */}
                </div>

            </div> 
        </section>
    )
}
export default UniqueDesign