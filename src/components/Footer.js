import React from 'react'

function Footer({ mybackground, title1, title2, footerParagraph, footercolor, footerParagraphColor, postColor }) {


    const footerNotes = [

        {
            title: "Call us now",

            body: "+2348171111228"
        },
        {
            title: "Email us on",

            body: "info@sancorpinvest.com"
        }

    ]
    return (
        <div style={{ background: `${mybackground ? mybackground : '#fd7e14'}`, alignItems: "center" }}
         className="container-fluid px-0 p-0 mt-4  footer-cover p-2">
            <div
             className="container d-flex flex-row flex-wrap justify-content-between py-4">
                <div style={{ color: "white" }} className="footerRight ">
                    <h4>{title1 ? title1 : "Got something in mind?"} </h4>
                    <h2> {title2 ? title2 : "Let's talk!"} </h2>
                    <p style={{ color: `${footerParagraphColor ? footerParagraphColor : 'white'}` }} >
                        {footerParagraph ? footerParagraph : "Schedule a meeting with us."}</p>
                </div>
                <div style={{ color: "white" }} className="footerLeft d-flex flex-row mx-2">
                    {
                        footerNotes.map((post, i) => <div className="footer-left-content">
                            <h6 style={{ color: `${postColor ? postColor : 'white'}` }}>{post.title} </h6>
                            <p>{post.body} </p>
                        </div>)
                    }

                </div>
            </div>
        </div>
    )
}

export default Footer
