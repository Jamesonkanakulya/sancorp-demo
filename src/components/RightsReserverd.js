import React from 'react'
import styled from 'styled-components'

function RightsReserverd() {
    return (
     <div style={{background:"#0e0e0e"}}>
            <div className="container d-flex justify-center align-text-center ">
            <Myheader style={{color:"#777",fontSize:"13px",fontFamily:"Times New Roman', Times, serif",marginTop:"3px"}}>
            2020 © SGL <span style={{color:"white"}}>Sancorp Group Limited</span> - Copyright All Rights Reserved | Designed By Jameson Kanakulya |

            </Myheader>

          
            
        </div>
     </div>
    )
}

export default RightsReserverd

const Myheader =  styled.p`
background:'red';
color:"white";
`
