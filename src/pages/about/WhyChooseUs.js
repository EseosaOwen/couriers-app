import React from "react";
import { styled } from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";

export default function WhyChooseUs() {
  const cargoFreight = 90;
  const airFreight = 85;
  const roadFreight = 96;
  const trainFreight = 89;

  return (
    <Container>
      <Metrics>
        <div>
          <h2>
            Why <span>Choose</span> Us
          </h2>
          <p>Check our thing best known for</p>
        </div>
        <ProgressBars>
          <ProgressBar
            completed={cargoFreight}
            bgColor={primary}
            height="15px"
            className="progress-bar"
            barContainerClassName="container"
          />
          <ProgressBar
            completed={airFreight}
            bgColor={primary}
            height="15px"
            className="progress-bar"
            barContainerClassName="container"
          />
          <ProgressBar
            completed={roadFreight}
            bgColor={primary}
            height="15px"
            className="progress-bar"
            barContainerClassName="container"
          />
          <ProgressBar
            completed={trainFreight}
            bgColor={primary}
            height="15px"
            className="progress-bar"
            barContainerClassName="container"
          />
        </ProgressBars>
      </Metrics>
      <Images>
        <figure>
          <img src="/assets/images/transport-1.webp" alt="" />
        </figure>
        <figure>
          <img src="/assets/images/service1.webp" alt="" />
        </figure>
      </Images>
    </Container>
  );
}

const primary = "#E11756";
// const secondary = "#FCCC0A";
// const heroText = "#BFC1C2";
const bg = "#fff";
// const dark = "#020";

const Container = styled.div`
  padding: 3rem;
  padding-top: 4rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
  background-color: #e117561b;

  @media (max-width: 500px) {
    padding: 1.5rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Metrics = styled.div`
  flex: 0.5;
  > div:first-of-type {
    margin-bottom: 1rem;
    h2 {
      font-family: Poppins;
      font-size: 2rem;

      @media (max-width: 500px) {
        font-size: 1.5rem;
        width: 100%;
      }
      span {
        color: ${primary};
        font-family: Poppins;
      }
    }
  }

  @media (max-width: 800px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const ProgressBars = styled.div`
  .progress-bar {
    margin-bottom: 1rem;
    border-radius: none;
  }
  .container {
    border-radius: 0;
    background: ${bg};
    height: 15px;
  }
`;

const Images = styled.div`
  display: flex;
  justify-content: center;
  flex: 0.5;
  gap: 0.5rem;

  @media (max-width: 800px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }

  figure {
    flex: 0.5;
    img {
      width: 100%;
      height: 300px;
    }
    @media (max-width: 450px) {
      width: 100%;
    }
  }

  figure:first-of-type {
    margin-top: -2.5rem;
    @media (max-width: 800px) {
      margin: auto;
    }
  }
`;
