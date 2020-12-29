import React from 'react'

import { FcHome,FcPhone,FcSms,FcPrint} from "react-icons/fc";
import {AiTwotoneMail } from "react-icons/ai";


function ContactDetail() {

    const contactDetails =[
        {
            icon:<FcPhone/>,
            title:'+2348171111228'

        },
        {
            icon:<AiTwotoneMail/>,
            title:'info@sancorpinvest.com'

        },
        {
            icon:<FcHome/>,
            title:'46-E, Almas Tower, Jumeirah Lakes Towers, Dubai, United Arab Emirates'

        },
        {
            icon:<FcPrint/>,
            title:'+2348171111228'

        },
    ]

    return (
        <div className="container conatct-detail-container">

           <div className="row">
           {
                contactDetails.map((item,i) => <div key={i} className="col-lg-3 col-md-6 contact-details">
                    <span>{ item.icon}</span>
                    <p>{item.title}</p>
                    
                </div>)
            }

           </div>
            
        </div>
    )
}

export default ContactDetail
