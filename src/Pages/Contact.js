import React from 'react'
import Banner from '../components/Banner'
import ContactContent from '../components/ContactContent'
import Mymap from '../components/Mymap'

function Contact() {
    return (
        <div>
          <Banner title1="Contact us" title6="Send us a Message or Call Us" slug="contact us"/>
            {/* <Mymap/> */}
            <ContactContent/>
        </div>
    )
}

export default Contact
