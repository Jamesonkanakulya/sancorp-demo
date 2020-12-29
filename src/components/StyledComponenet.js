import styled from "styled-components";

const Cart = styled.div`
  background-color: "red";

  h1 {
    color: yellow;
    background: "red";
  }

  @keyframes breath-animation {
    0% {
      height: 100px;
      width: 100px;
    }
    30% {
      height: 400px;
      width: 400px;
      opacity: 1;
    }
    40% {
      height: 405px;
      width: 405px;
      opacity: 0.3;
    }
    100% {
      height: 100px;
      width: 100px;
      opacity: 0.6;
    }
  }
`;

const Button = styled.button`
  background: red;
  color: "red";
  width: 100%;
`;
export { Cart, Button };
