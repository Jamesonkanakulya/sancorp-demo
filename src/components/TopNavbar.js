import React from 'react'
import { FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter,FaInstagramSquare } from "react-icons/fa";
import { a } from 'react-router-dom';



function TopNavbar() {
    return (
        <div className='topbar'>
            <div className="container">
                <div className="topbar-container">
                <h6>
                    SUN-THUR 9.00-17.00
                </h6>
                <h6>
                    CALL US: 052 3648216
                </h6>
                <ul>
                    <li ><a href='#' style={{background:" #6788ce"}}><FaFacebookF/></a> </li>
                    <li ><a href='#'  style={{background:'#29c5f6'}}><FaTwitter/></a></li>
                    <li><a href='#' style={{background:" #007ab9"}}><FaLinkedinIn/></a> </li>
                    <li  ><a href='#' style={{background:"#1d5b82"}}> <FaInstagram/> </a> </li>
                  
                </ul>
                    
                </div>
               
                
            </div>
            
        </div>
    )
}

export default TopNavbar
