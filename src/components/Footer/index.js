import React from 'react'
import './style.css';
import fblog1 from '../../assets/images/fblog1.png';
import fblog2 from '../../assets/images/fblog2.png';
import fblog3 from '../../assets/images/fblog3.png';

import facebook from '../../assets/images/facebook.png';
import twetter from '../../assets/images/twetter.png';
import instagram from '../../assets/images/instagram.png';
import pinterest from '../../assets/images/pinterest.png';
import youtube from '../../assets/images/youtube.png';
import wiki from '../../assets/images/wiki.png';
import t from '../../assets/images/t.png';


import binsta1 from '../../assets/images/binsta1.jpg';
import binsta2 from '../../assets/images/binsta2.jpg';
import binsta3 from '../../assets/images/binsta3.jpg';
import binsta4 from '../../assets/images/binsta4.jpg';
import binsta5 from '../../assets/images/binsta5.jpg';
import binsta6 from '../../assets/images/binsta6.jpg';
import binsta7 from '../../assets/images/binsta7.jpg';
import binsta8 from '../../assets/images/binsta8.jpg';
import binsta9 from '../../assets/images/binsta9.jpg';

function Footer(){
    return(
        <div className="Footer">
            <div className="container">
                <div className='ab-mogo'>
                    <div className='ab-logo'>MoGo</div>
                    <div className='ab-lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <div className='ab-numfollow'><span>15k</span> followers</div>
                    <hr/>
                    <div className='ab-follow'>
                        <span>Follow Us:</span>
                        <img src={facebook}/>
                        <img src={twetter}/>
                        <img src={instagram}/>
                        <img src={pinterest}/>
                        <img src={youtube}/>
                        <img src={wiki}/>
                        <img src={t}/>
                    </div>
                    <div className='ab-input'>
                        <input placeholder='Your Email...'/>
                        <button>SUBSCRIBE</button>
                    </div>
                    
                </div>

                <div className='blog'>
                    <div className='blog-logo'>BLOGS</div>
                    <div className='blog-item'>
                        <img src={fblog1}/>
                        <div className='blog-item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing
                            <div>Jan 9, 2016</div>
                        </div>
                    </div>
                    <div className='blog-item'>
                        <img src={fblog2}/>
                        <div className='blog-item-text'>Consectetur adipiscing elit, sed do eiusmod tempor
                            <div>Jan 9, 2016</div>
                        </div>
                    </div>
                    <div className='blog-item'>
                        <img src={fblog3}/>
                        <div className='blog-item-text '>sed do eiusmod tempor incididunt ut labore
                            <div>Jan 9, 2016</div>
                        </div>
                    </div>
                </div>

                <div className='instagram'>
                    <div className='insta-logo'>INSTAGRAM</div>
                    <div className='insta-images'>
                        <img src={binsta1}/>
                        <img src={binsta2}/>
                        <img src={binsta3}/>
                        <img src={binsta4}/>
                        <img src={binsta5}/>
                        <img src={binsta6}/>
                        <img src={binsta7}/>
                        <img src={binsta8}/>
                        <img src={binsta9}/> 
                    </div>
                    <div className='insta-a'><a href='#'>View more photos</a> </div>
                </div>
                
            </div> 
            <hr/>
            <div>© 2016 MoGo free PSD template by <span>Laaqiq</span> </div>
        </div>
    )
}

export default Footer;