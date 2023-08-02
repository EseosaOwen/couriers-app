import React from "react";
import { styled } from "styled-components";

export default function StepsToCooperation() {
  return (
    <Container>
      <TopContent>
        <h2>
          Steps to <span>Cooperation</span>
        </h2>
        <p>
          Sed tempor nec est finibus molestie. Sed molestie orci eleifend,
          sodales est ut, aliquam quam. Mauris fringilla consectetur.
        </p>
      </TopContent>
      <Steps>
        <Step>
          <figure>
            <img src="/assets/images/package-search.png" alt="" />
            <span>01</span>
          </figure>
          <div>
            <h3>Thinking Strategy</h3>
            <p>
              Sed tempor nec est finibus molestie. Sed molestie orci eleifend.{" "}
            </p>
          </div>
        </Step>
        <Step>
          <figure>
            <img src="/assets/images/package-search.png" alt="" />
            <span>01</span>
          </figure>
          <div>
            <h3>Thinking Strategy</h3>
            <p>
              Sed tempor nec est finibus molestie. Sed molestie orci eleifend,.{" "}
            </p>
          </div>
        </Step>
        <Step>
          <figure>
            <img src="/assets/images/package-search.png" alt="" />
            <span>01</span>
          </figure>
          <div>
            <h3>Thinking Strategy</h3>
            <p>
              Sed tempor nec est finibus molestie. Sed molestie orci eleifent.{" "}
            </p>
          </div>
        </Step>
      </Steps>
    </Container>
  );
}

const primary = "#E11756";
const secondary = "#FCCC0A";
// const heroText = "#BFC1C2";
const bg = "#fff";
// const dark = "#020";

const Container = styled.div`
  padding: 3rem;

  @media (max-width: 500px) {
    padding: 1.5rem;
    padding: 3rem;
  }
  /* 
  h2 {
    font-family: Poppins;
    color: ${bg};
  } */
`;

const TopContent = styled.div`
  text-align: center;
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
  p {
    width: 60%;
    margin: 0 auto;

    @media (max-width: 700px) {
      width: 100%;
    }
  }
`;

const Steps = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Step = styled.div`
  gap: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;

  figure {
    padding: 1.5rem;
    position: relative;
    width: fit-content;
    background-color: ${bg};
    border-radius: 50%;
    box-shadow: 0 0 10px 1px #54354d13;
    margin-bottom: 1rem;

    > img {
      max-width: 40px;

      @media (max-width: 900px) {
        max-width: 30px;
      }
    }

    span {
      padding: 1rem;
      position: absolute;
      top: 1%;
      background: ${primary};
      border-radius: 50%;
    }

    div {
      h3 {
        margin: 1rem;
      }

      p {
      }
    }
  }

  &:nth-child(2) {
    figure {
      span {
        background: ${secondary};
      }
    }
  }
`;
