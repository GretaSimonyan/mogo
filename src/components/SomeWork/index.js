import React from 'react';
import './style.css';
import work1 from '../../assets/images/work-1.jpg';
import work2 from '../../assets/images/work-2.jpg';
import work3 from '../../assets/images/work-3.jpg';
import work4 from '../../assets/images/work-4.jpg';
import work5 from '../../assets/images/work-5.jpg';
import work6 from '../../assets/images/work-6.jpg';
import work7 from '../../assets/images/work-7.jpg';


function SomeWork(){
    return(
        <div className='SomeWork'>
            <div className='section'>
                <div className="section_suptitle">What we do</div>
                <div className='section_title'>Some of our work</div>  
                <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>              
            </div>

            <div className='pics'>
                <div><img src={work1}/></div>
                <div><img src={work3}/></div>
                <div><img src={work2}/></div>
                <div><img src={work4}/></div>
                <div className='long'><img src={work5}/></div>
                <div><img src={work6}/></div>
                <div><img src={work7}/></div>
            </div>
        </div>
    )
}

export default SomeWork;