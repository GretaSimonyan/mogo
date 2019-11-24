import React from 'react';
import './style.css';
import citate from '../../assets/images/citate.png';

class ServiceSlider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            intro: [ 
                {
                    id: 0,
                    name: "Jon Doe", 
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                },
                {
                    id: 1,
                    name: "Lea Mitchel", 
                    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation. Ut enim ad minim veniam, ",
                },
                {
                    id: 2,
                    name: "Fin Johns", 
                    text: "Ut enim ad minim veniam.  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation. Ut enim ad minim veniam.",
                },
                
            ],
            showId: 0,
        }
    }
    renderSliderItem = () => ( 
        this.state.intro.map( (item) => ( 
            this.state.showId == item.id && 
            <div className='slider'>
                <button className='left' onClick = { () => this.leftItem(item.id)}>&#60;</button>
                    <div className='slider-intro'>
                        <img src={citate}/>
                        <div className='citate-autor'>
                            <p> {item.text} </p>
                            <div>-{item.name}</div>
                        </div>
                    </div>                
                <button className='right' onClick = { () => this.rightItem(item.id+1)}>&#62;</button>   
            </div>
        ))
    )
    leftItem = (id) => {
        this.setState( { showId: id-- } )
    }

    rightItem = (id) => {
        id >= 0 ?
        this.setState( { showId: id } )
        :
        this.setState( { showId: 0 } ) 
    }
    render(){
        return(
            <div className='ServiceSlider'>
                {this.renderSliderItem()}
            </div>
        )
    }
}

export default ServiceSlider

                // <div className='slider'>
                //     <button className='left' onClick = { () => this.leftItem()}>&#60;</button>
                //     <div className='slider-intro'>
                //         <img src={citate}/>
                //         <div className='citate-autor'>
                //             <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."</p>
                //             <div>-Jon Doe</div>
                //         </div>
                //     </div> 
                //     <button className='right' onClick = { () => this.rightItem()}>&#62;</button>   
                // </div> 