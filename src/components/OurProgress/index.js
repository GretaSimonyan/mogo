import React from "react";
import "./style.css"

function OurProgress(){
    return(
        <div className="OurProgress">
            <div className="progress-item">
                <div className="span_div">
                    <span>42</span> <div>WEB DESIGN PROJECTS</div>
                </div>    
            </div>
            
            <div className="progress-item">
                <div className="span_div">
                    <span>123</span> <div>HAPPY CLIENT</div>
                </div>     
            </div>

            <div className="progress-item">
                <div className="span_div">
                    <span>15</span> <div>AWARD WINNER</div>
                </div>   
            </div>

            <div className="progress-item">
                <div className="span_div">
                    <span>99</span> <div>CUP OF COFFEE</div>
                </div>
            </div>
            
            <div className="progress-item last_progress_item">
                <div className="span_div">
                <span>24</span> <div>MEMBERS</div> 
                </div>
            </div> 
        </div>
    )
}
export default OurProgress