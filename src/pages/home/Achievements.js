import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
// import { useSpring, animated } from "react-spring";

// function Number({ n }) {
//   const { number } = useSpring({
//     from: { number: 0 },
//     number: n,
//     // * after loading the page the delay
//     delay: 1200,
//     //* the config, here teh mass and tension define the way that we are going to show the animation, so this means that we have slow animation when the animation is close to the max number.
//     config: { mass: 1, tension: 10, friction: 10 },
//   });
//   return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
// }

export default function Achievements() {
  return (
    <Container>
      <Main>
        <div>
          <h1>
            Excellent Company <span>Quality </span>Services
          </h1>
          <p>
            Donec lacinia purus et nisl dignissim, vel egestas nunc iaculis.
            Maecenas elementum elementum ipsum, sit amet lacinia lectus
            vulputate nec.
          </p>
          <ul>
            <li>
              100% Customer satisfaction <CheckmarkIcon />
            </li>
            <li>
              Free Collection & Delivery <CheckmarkIcon />
            </li>
            <li>
              Affordable Prices <CheckmarkIcon />
            </li>
          </ul>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div className="button-57" role="button">
              <span className="text">Track Shipment</span>
              <span>Track Shipment</span>
            </div>
          </Link>
        </div>
        <RightSide>
          <Wins>
            <Cards className="achieve2">
              <p>
                {/* <Number n={70} /> */}
                <p>1200 +</p>
              </p>
              <p>Delivered packages</p>
            </Cards>
            <Cards className="achieve2">
              <p>
                {/* <Number n={70} /> */}
                <p className="different">50</p>
              </p>
              <p>Warehouse areas</p>
            </Cards>
            <Cards className="achieve2">
              <p>
                {/* <Number n={70} /> */}
                <p>4567</p>
              </p>
              <p>Happy Clients</p>
            </Cards>
          </Wins>
        </RightSide>
      </Main>
      <BottomImages>
        <figure>
          <img src="/assets/images/gallery01.webp" />
        </figure>
        <figure>
          <img src="/assets/images/gallery02.webp" />
        </figure>
        <figure>
          <img src="/assets/images/gallery03.webp" />
        </figure>
      </BottomImages>
    </Container>
  );
}
const primary = "#E11756";
const secondary = "#FCCC0A";
const heroText = "#BFC1C2";
const bg = "#fff";
const dark = "#757677";

const Container = styled.div`
  padding: 3rem;
  margin-top: 3rem;

  @media (max-width: 500px) {
    padding: 3rem 1.5rem;
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
    width: fit-content;
    /* width: 70%; */
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
`;

const Main = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }

  > div:first-of-type {
    flex: 0.7;
    h1 {
      font-size: 2rem;
      font-weight: 700;
      font-family: Poppins;
      width: 80%;

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
      width: 90%;
      margin-bottom: 1rem;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      margin-bottom: 1rem;

      li {
        position: relative;
        padding-left: 30px;
        line-height: 1.5;
      }
    }
  }
`;

const CheckmarkIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  background-image: url("/assets/images/icons8-done-52.png");
  background-size: cover;
`;

const Wins = styled.div``;

const RightSide = styled.div`
  flex: 0.4;
`;

const Cards = styled.div`
  margin-bottom: 1rem;
  p {
    p {
      color: ${primary};
      font-size: 2rem;
      font-weight: bold;
    }

    .different {
      color: ${secondary};
    }

    p:nth-child(2) {
    }
  }
`;

const BottomImages = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 2rem;
  }

  figure {
    overflow: hidden;
    flex: 0.5;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      transition: transform 0.4s ease-in-out;
    }

    @media (max-width: 700px) {
      width: 100%;
    }

    &:hover {
      img {
        transform: scale(1.2);
      }
    }
  }
`;
