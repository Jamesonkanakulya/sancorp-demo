import React from "react";
import styled from "styled-components";
function TitleOne({ title }) {
  return (
    <div className="my-4">
      <Header>{title}</Header>
    </div>
  );
}

export default TitleOne;

const Header = styled.h1`
  text-align: center;
  margin: 1.3rem auto;
  font-size: 4rem;
  text-transform: capitalize;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  letter-spacing: 2px;
`;
