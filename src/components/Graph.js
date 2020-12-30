import React from "react";
import styled, { keyframes } from "styled-components";

function Graph({ title, percentage, time }) {
  return (
    <div className="my-2 p-2">
      <Details>
        <h6>{title}</h6>
        <Para percentage={percentage} time={time}>
          {percentage}%
        </Para>
      </Details>
      <Cart percentage={percentage} time={time} />
    </div>
  );
}

export default Graph;

const breatheAnimation = (percentage) => keyframes`
 0% { width: 10%; opacity: 0.1; }
 30% { width: 20%; opacity: 0.2 }
 40% { width: 40%; opacity: 0.4; }
 60% { width: 60%;  opacity: 0.6;}

 100% { width:${percentage}%;  opacity:1; padding-right: 40%;}
 `;

const Para = styled.p`
  position: absolute;
  animation-name: ${(props) => finalstage(props.percentage)};
  animation-delay: ${(props) => (props.time ? props.time : 4)}s;
  animation-duration: 1s;
  /* animation-iteration-count: initial; */
  animation-timing-function: linear;
  /* background: blue; */

  animation-fill-mode: forwards;
`;
const finalstage = (percentage) => keyframes`
 0% {  margin-left:0rem; display:none; opacity:0; color:white}
 100% { 
 margin-left:${percentage}%;
 display:inline-block;
 }
 `;
const Cart = styled.div`
  width: 100%;
  background: red;

  height: 1rem;
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  /* animation: breatheAnimation 5s ease 1s; */
  animation-name: ${(props) => breatheAnimation(props.percentage)};
  animation-duration: ${(props) => (props.time ? props.time : 4)}s;
  /* animation-iteration-count: initial; */
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  background: yellow;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: -0.5rem;
  /* overflow: hidden; */
  h6 {
    position: relative;
    text-transform: uppercase;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 14px;
  }
`;
