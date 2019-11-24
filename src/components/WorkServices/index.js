import React from "react";
import "./style.css"
import icon1 from "../../assets/images/1.png"
import icon2 from "../../assets/images/2.png"
import icon3 from "../../assets/images/3.png"
import icon4 from "../../assets/images/4.png"
import icon5 from "../../assets/images/5.png"
import icon6 from "../../assets/images/6.png"


function WorkServices(){
    return(
        <div className="WorkServices">

            <div className='section'>
                <div className="section_suptitle">We work with</div>
                <div className='section_title'>Amazing services</div>                
            </div>


            <div className='services'>
                <div className='services_items'>
                    <img className='items-icon' src={icon1}/>
                    <div className='items-name'>photography</div>
                    <div className='items-lorem'>Lorem ipsum dolor sit amet consec<br/> adipisicing elit.Sint, modi eius </div>
                </div>

                <div className='services_items'>
                    <img className='items-icon' src={icon2}/>                        
                    <div className='items-name'>web design</div>
                    <div className='items-lorem'>Lorem ipsum dolor sit amet consecr<br/> adipisicing elit.Sint, modi eius</div>
                </div>
                    
                <div className='services_items'>
                    <img className='items-icon' src={icon3}/>
                    <div className='items-name'>creativity</div>
                    <div className='items-lorem'>Lorem ipsum dolor sit amet consec<br/> adipisicing elit.Sint, modi eius</div>
                </div>

            </div>

            <hr/>

            <div className='services'>
                <div className='services_items'>
                    <img className='items-icon' src={icon4}/>
                    <div className='items-name'>seo</div>
                    <div className='items-lorem'>Lorem ipsum dolor sit amet consec<br/> adipisicing elit.Sint, modi eius</div>
                </div>

                <div className='services_items'>
                    <img className='items-icon' src={icon5}/>
                    <div className='items-name'>css/html</div>
                    <div className='items-lorem'>Lorem ipsum dolor sit amet consec<br/> adipisicing elit.Sint, modi eius</div>
                </div>

                <div className='services_items'>
                    <img className='items-icon' src={icon6}/>
                    <div className='items-name'>digital</div>
                    <div className='items-lorem'>Lorem ipsum dolor sit amet consec<br/> adipisicing elit.Sint, modi eius</div>
                </div>   

            </div>
        </div>
    )
}

export default WorkServices