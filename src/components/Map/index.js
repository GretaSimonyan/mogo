import React from 'react'
import './style.css';
import map from '../../assets/images/map.jpg';
import maplogo from '../../assets/images/map-logo.png'

function Map(){
    return(
        <div className="Map" style={ { backgroundImage: `url(${map})`} }>
            <div className="container">
                <img src={maplogo}/>
                <a className="open" href='https://goo.gl/maps/5jhsLyQ51Fn3Yi8k9'>Open Map</a>                
            </div> 
        </div>
    )
}

export default Map;