import React from "react";
import "./style.css";
import service from '../../assets/images/services.jpg';
import ServiceIntro from '../ServiceIntro';
import ServiceSlider from '../ServiceSlider';

class Service extends React.Component {

    render(){
    return(
        <div className="Service">
            <div className='section'>
                <div className="section_suptitle">Service</div>
                <div className='section_title'>What we do</div>
                <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, modi eius enim doloremque, voluptatum sunt nam libero
                    debitis blanditiis temporibusveniam vitae facilis nihil consectetur
                </p>
            </div>

            <div className='container'>
                <img src={service}></img>
                <ServiceIntro/>
            </div>
            
            <ServiceSlider/>
        </div>
    )
    }
}
export default Service