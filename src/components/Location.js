import React from 'react'
import location from '../images/location.PNG'

function Location() {
    return (
        <div className="container my-4 location">
            <a href="https://www.google.ae/maps/place/Almas+Tower+-+Jumeirah+Lakes+Towers+-+Dubai/@25.0689836,55.1390161,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f6cad976e81ad:0xa80be464b8863fdc!8m2!3d25.0689836!4d55.1412048?hl=en&authuser=0">

               <img  src={location} alt="location" /> 
            </a>
            
        </div>
    )
}

export default Location
