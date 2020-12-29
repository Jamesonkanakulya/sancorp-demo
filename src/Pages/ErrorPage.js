import React from 'react'
import Banner from '../components/Banner'
import TitleOne from '../components/TitleOne'
import styled from "styled-components";
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div>
          <Banner title1="Error" title6="The page cannot to found" slug="error"/>
          <ErrorPageContainer className="container">
              <TitleOne title="ERROR 404"/>
              <ErrorContainer>
                  <h3>back to homepage</h3>
                  <Link to="/">
                  <button>homepage</button></Link>

              </ErrorContainer>
              

          </ErrorPageContainer>
            
        </div>
    )
}

export default ErrorPage

const ErrorPageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`

const ErrorContainer = styled.div`

display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin-bottom: 4.2rem;
h3{
    text-transform: capitalize;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    letter-spacing: 2px;
}
button{
    padding: 0.5rem;
    border: 1px solid black;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 5px;
    margin: 0.5rem auto;

    &:hover{
     background: #d16f12;
             transition: all 0.3s ease;
             border: 1px solid  #d16f12;
             color:#fff;
 }
}

`
