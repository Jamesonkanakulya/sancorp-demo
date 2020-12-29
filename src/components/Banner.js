import React from 'react'
import { Link } from 'react-router-dom'

function Banner({title1,title6,slug}) {
    return (
        <div style={{background:"#101019"}} className="container-fluid px-0 p-4">

            <div className="container d-flex flex-row flex-wrap justify-content-between banner">
            <div className="left">
                <h2>
                    {title1}
                </h2>
                <h6>
                    {title6}
                </h6>
            </div>

            <div className="d-flex p-4 right">
                <h5>
                    <Link to='/'>Home</Link>  <span> {slug?slug:title6}</span>
                </h5>
            </div>
            </div>
     
            
        </div>
    )
}

export default Banner
