import React from "react";
import styled from "styled-components";

import { Carousel2 } from "../../components/Carousel2";

export default function Guaranty() {
  return (
    <Container>
      <TopSection>
        <h1>
          Trusted by more than <span>365,000</span> happy clients
        </h1>
        <p>
          Sed tempor nec est finibus molestie. Sed molestie orci eleifend,
          sodales est ut, aliquam quam. Mauris fringilla consectetur purus eget
          egestas. Proin varius interdum blandit.
        </p>
      </TopSection>
      <Carousel2 />
    </Container>
  );
}

const primary = "#E11756";
// const secondary = "#FCCC0A";
// const heroText = "#BFC1C2";
// const bg = "#fff";
// const dark = "#757677";

const Container = styled.div`
  padding: 3rem;

  @media (max-width: 500px) {
    padding: 3rem 1rem;
  }
`;

const TopSection = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    font-family: Poppins;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
    text-align: center;

    @media (max-width: 800px) {
      width: 80%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
    @media (max-width: 500px) {
      font-size: 1.5rem;
      width: 100%;
    }

    span {
      color: ${primary};
      font-family: Poppins;
    }
  }

  p {
    width: 80%;
    margin: 0 auto;
    text-align: center;

    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;

// const CustomPrevButton = styled.button`
//   left: 10% !important;
//   background: white;
//   color: black;
//   transition: all 0.2s ease;
// `;

// const CustomNextButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   transform: translateX(-58%) !important;
// `;
