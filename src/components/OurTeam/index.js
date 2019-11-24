import React from 'react';
import './style.css';
import matthew from '../../assets/images/matthew.jpg';
import christopher from '../../assets/images/christopher.jpg';
import michael from '../../assets/images/michael.jpg';
import teamlogo1 from '../../assets/images/teamlogo1.png';
import teamlogo2 from '../../assets/images/teamlogo2.png';
import teamlogo3 from '../../assets/images/teamlogo3.png';
import teamlogo4 from '../../assets/images/teamlogo4.png';
import teamlogo5 from '../../assets/images/teamlogo5.png';
import teamlogo6 from '../../assets/images/teamlogo6.png';

function OurTeam (){
    return(
        <div className = 'OurTeam'>
            <div className='section'>
                <div className="section_suptitle">Whu we are</div>
                <div className='section_title'>Meet our team</div>  
                <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>              
            </div>
            <div className ='team-items'>
                <div>
                    <div className="about-img">
                        <div><img src={matthew}/></div>
                    </div>
                    <div className='team-items-names'>
                        MATTEW DIX
                        <div>Graphic Design</div>
                    </div>
                </div>

                <div>
                    <div className="about-img">
                        <div> <img src={christopher}/></div>
                    </div> 
                    <div className='team-items-names'>
                        CHRISTOPHER CAMPBELL
                        <div>Branding UX Design</div>
                    </div>
                </div>

                <div>
                    <div className="about-img">
                        <div><img src={michael}/></div> 
                    </div>  
                    <div className='team-items-names'>
                        MICHAEL FERTIC
                        <div>Developer</div>
                    </div>  
                </div>               
            </div>

            <div className='team-logos-back'>
                <div className='team-logos'>
                    <img src={teamlogo1} alt='teamlogo'/>
                    <img src={teamlogo2} alt='teamlogo'/>
                    <img src={teamlogo3} alt='teamlogo'/>
                    <img src={teamlogo4} alt='teamlogo'/>
                    <img src={teamlogo5} alt='teamlogo'/>
                    <img src={teamlogo6} alt='teamlogo'/>
                </div>
            </div>
            
        </div>
    )
}

export default OurTeam;