import React from "react";
import { Carousel } from "../../components/Carousel";
import { styled } from "styled-components";

export default function Contact() {
  return (
    <Container>
      <Carousel />
    </Container>
  );
}

const primary = "#E11756";
const secondary = "#FCCC0A";
// const heroText = "#BFC1C2";
const bg = "#fff";
const dark = "#757677";

const Container = styled.div`
  padding: 1rem;
  /* .slider-container {
    box-shadow: 0 0 10px 1px #54354d13;
    padding: 1rem;
  }

  .testim-name {
    padding: 1rem;
    display: flex;
    gap: 0.5rem;

    figure {
      img {
        width: 40px;
        height: 40px;
      }
    }
    div {
    }
  }

  .slider-slide {
    padding: 1rem;
    background: ${bg};

    @media (max-width: 500px) {
      padding: 1rem;
      margin: 0 1rem;
    }

    .slider-content {
      margin-top: 1rem;
      h3 {
        font-size: 1.1rem;
        font-weight: 600;
      }
      p {
        color: ${dark};
        position: relative;
        margin-left: 1rem;
        font-size: 0.9rem;
        margin-bottom: 2rem;

        &:before {
          position: absolute;
          content: "";
          height: 100%;
          width: 5px;
          background: ${secondary};
          margin-right: 2rem;
          left: -15px;
        }
      }
    }
  } */
`;
