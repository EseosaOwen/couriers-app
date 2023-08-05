import React from "react";
import { styled } from "styled-components";

export default function ServicesList() {
  return (
    <Container>
      <h2>
        Our <span>Service</span> for you
      </h2>
      <p>
        We are committed to giving our customers the best and access to all
        logistic related services in the most cost effective way we can
      </p>
      <TransportServices>
        <Card>
          <figure>
            <img src="/assets/images/sea-transport.jpg" alt="" />
            <div>
              <img src="/assets/images/airplane.png" alt="" />
            </div>
          </figure>
          <CardContent>
            <h4>Sea Transportation</h4>
            <p>
              We transport most of our freights via sea and ensure they arrive
              at the desired destination in the best condition
            </p>
            <div className="button-57" role="button">
              <span className="text">Read</span>
              <span>Read</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <figure>
            <img src="/assets/images/sea-transport.jpg" alt="" />
            <div>
              <img src="/assets/images/ship.png" alt="" />
            </div>
          </figure>
          <CardContent>
            <h4>Air Transportation</h4>
            <p>
              We transport most of our freights via sea and ensure they arrive
              at the desired destination in the best condition
            </p>
            <div className="button-57" role="button">
              <span className="text">Read</span>
              <span>Read</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <figure>
            <img src="/assets/images/warehousing.jpg" alt="" />
            <div>
              <img src="/assets/images/airplane.png" alt="" />
            </div>
          </figure>
          <CardContent>
            <h4>Warehousing</h4>
            <p>
              We transport most of our freights via sea and ensure they arrive
              at the desired destination in the best condition
            </p>
            <div className="button-57" role="button">
              <span className="text">Read</span>
              <span>Read</span>
            </div>
          </CardContent>
        </Card>
      </TransportServices>
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

  @media (max-width: 500px) {
    padding: 3rem 1rem;
  }

  .button-57 {
    position: relative;
    overflow: hidden;
    border: 1px solid ${primary};
    color: ${bg};
    display: inline-block;
    font-size: 15px;
    line-height: 15px;
    padding: 18px 25px 17px;
    text-decoration: none;
    cursor: pointer;
    background: ${primary};
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    display: block;
    width: fit-content;
    width: 50%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .button-57 span:first-child {
    position: relative;
    transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
    z-index: 10;
  }

  .button-57 span:last-child {
    color: ${primary};
    display: block;
    position: absolute;
    width: 100%;
    text-align: center;
    transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
    z-index: 100;
    opacity: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .button-57:after {
    content: "";
    position: absolute;
    bottom: -50%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${bg};
    transform-origin: bottom center;
    transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
    transform: skewY(9.3deg) scaleY(0);
    z-index: 50;
  }

  .button-57:hover:after {
    transform-origin: bottom center;
    transform: skewY(9.3deg) scaleY(2);
  }

  .button-57:hover span:last-child {
    transform: translateX(-50%) translateY(-100%);
    opacity: 1;
    transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
  }

  h2 {
    font-size: 2rem;
    font-family: Poppins;
    text-align: center;

    span {
      color: ${primary};
      font-family: Poppins;
    }
  }

  > p {
    margin: 0 auto;
    width: 60%;
    text-align: center;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

const TransportServices = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 0.5;
  box-shadow: 0 0 10px 1px #54354d13;

  @media (max-width: 700px) {
    width: 100%;
  }

  figure {
    position: relative;
    img {
      width: 100%;
    }
    div {
      position: absolute;
      top: 80%;
      right: -5%;
      padding: 1rem;
      border: solid 5px ${primary};
      z-index: 1;
      background-color: ${bg};
      border-radius: 50%;

      img {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

const CardContent = styled.div`
  padding: 1rem;

  h4 {
    font-size: 1.6rem;
    margin-bottom: 0.7rem;
  }

  p {
    font-size: 1rem;
    color: #4f4f4f;
  }
`;
