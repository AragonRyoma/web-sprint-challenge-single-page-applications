import React from "react";
import pizzaSplash from "../images/pizzaSplash.jpg";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  header {
    width: 100%;
    background-image: url(${pizzaSplash});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 40% 80%;
    height: 93vh;

    h1 {
      margin: 0 auto;
    }
  }
`;

const HomePage = (props) => {
  return (
    <HomeContainer>
      <header>
        <h1>Hello, click "Make a Za!" to start your order!</h1>
      </header>
    </HomeContainer>
  );
};

export default HomePage;
