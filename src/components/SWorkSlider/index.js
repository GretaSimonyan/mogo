import React from 'react';
import './style.css';
import joshua from '../../assets/images/joshua.png';

import styled from "styled-components";


const Slider_back = styled.div`
    width: 100%;
    height: 240px;
    margin: 100px 0;
`;

const Slider = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
`;

const Button = styled.button`
    border: none;
    outline: none;
    width: 50px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    font-size: 40px;
    opacity: 0.2;
    color: ${props => (props.left ? "blue" : "red" )};
`;

const Slider_intro = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px;
`;

class SWorkSlider extends React.Component{
    render(){
        return(
            <Slider_back>
                <Slider>

                    <Button left>&#60;</Button>

                    <Slider_intro>
                        <img src={joshua}/>
                        <div className='citate-autor'>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."</p>
                            <div>-Joshua Earle</div>
                        </div>
                    </Slider_intro>

                    <Button right>&#62;</Button>
                    
                </Slider>
            </Slider_back>
        )
    }
}

export default SWorkSlider