import React from 'react';
import "./style.css";
import jan15 from "../../assets/images/jan15.jpg";
import jan14 from "../../assets/images/jan14.jpg";
import jan12 from "../../assets/images/jan12.jpg";
import comment from '../../assets/images/comment.png';
import seen from '../../assets/images/seen.png';


function OurStoryes(){
    return(
        <div className="OurStoryes">
            <div className='section'>
                <div className="section_suptitle">Our Storyes</div>
                <div className='section_title'>Latest Blog</div>                
            </div>

            <div className='blog-item'>
                <div className='item-calendar'>
                    <div className='calendar-img' style={ { backgroundImage: `url(${jan15})`} }>
                        <div>15 Jan</div>
                    </div>
                    
                    <div className='heading'>Lorem ipsum dolor sit amet</div>
                    <div className='about'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <hr/>
                    <div className='seen-comment'>
                        <img src={seen}/>
                        <span>542</span>
                        <img src={comment}/>
                        <span>17</span>
                    </div>
                </div>
            
                <div className='item-calendar'>
                    <div className='calendar-img' style={ { backgroundImage: `url(${jan14})`} }>
                        <div>14 Jan</div>
                    </div>
                    
                    <div className='heading'>Sed do eiusmod tempor</div>
                    <div className='about'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <hr/>
                    <div className='seen-comment'>
                        <img src={seen}/>
                        <span>992</span>
                        <img src={comment}/>
                        <span>42</span>
                    </div>
                </div>
            
                <div className='item-calendar'>
                    <div className='calendar-img' style={ { backgroundImage: `url(${jan12})`} }>
                        <div>12 Jan</div>
                    </div>

                    <div className='heading'>Incididunt ut labore et dolore</div>
                    <div className='about'>Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <hr/>
                    <div className='seen-comment'>
                        <img src={seen}/>
                        <span>1560</span>
                        <img src={comment}/>
                        <span>98</span>
                    </div>
                </div> 
            </div>
                     
        </div>
    )
}
export default OurStoryes