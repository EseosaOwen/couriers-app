import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function HeroSection() {
  return (
    <Container className="">
      <HeroContent>
        <h1>
          Deliver <span>Packages</span> <span>in any way</span>
        </h1>
        <p>
          Curabitur congue finibus lorem, at dignissim metus elementum sit amet.
          Mauris eget dapibus quam. Integer a ante rutrum, semper risus a,
          blandit elit. Nunc dolor purus, condimentum ut lorem in, tincidunt
          consequat erat.
        </p>
        <Link to="" style={{ textDecoration: "none" }}>
          <div className="button-57" role="button">
            <span className="text">Track Shipment</span>
            <span>Track Shipment</span>
          </div>
        </Link>
      </HeroContent>
      <ContainerImage>
        <div>
          <figure>
            <img src="/assets/images/container-image.webp" />
          </figure>
          <p>Shipping Freight</p>
        </div>
        <figure>
          <img src="/assets/images/container-image.webp" />
        </figure>
      </ContainerImage>
    </Container>
  );
}

const primary = "#E11756";
const secondary = "#FCCC0A";
const heroText = "#BFC1C2";
const bg = "#fff";
const dark = "#020";

const Container = styled.div`
  background: linear-gradient(#3e081989, #4b081d89),
    url("/assets/images/hero-bg.jpg");
  background-size: cover;
  background-position: center;
  padding: 7rem 3rem;
  display: flex;
  gap: 2rem;
  /* align-items: center; */
  @media (max-width: 500px){
    padding: 7rem 1.5rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;

  h1 {
    color: ${bg};
    font-size: 2.6rem;
    font-family: Poppins;
    margin-bottom: 1rem;
    width: 60%;

    @media (max-width: 1120px){
        width: 70%;
    }

    @media (max-width: 1000px){
        width: 90%;
    }

    @media (max-width: 700px){
        font-size: 2.1rem;
    }

    @media (max-width: 400px){
        font-size: 1.7rem;
    }

    > span:first-of-type {
      color: ${secondary};
      font-family: Poppins;
    }

    > span:last-of-type {
      font-family: Poppins;
    }
  }

  p {
    color: ${bg};
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

  a {
    width: fit-content;
    flex: 0.5;
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

const ContainerImage = styled.div`
  flex: 0.6;
  position: relative;

  @media (max-width: 1000px) {
    display: none;
  }

  > div {
    display: flex;
    gap: 1rem;
    /* align-items: center; */

    p {
      flex: 0.5;
      color: white;
      margin-left: 1rem;
      position: relative;
      height: fit-content;

      &:before {
        position: absolute;
        content: "";
        height: 5px;
        width: 7px;
        background: ${secondary};
        margin-right: 2rem;
        left: -12px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    figure {
      flex: 0.4;
      z-index: 1;
      img {
        width: 100%;
      }
    }
  }

  > figure {
    position: absolute;
    top: 65%;
    left: 30%;
    width: 35%;

    @media (max-width: 1200px) {
      top: 45%;
    }

    img {
      width: 100%;
    }
  }
`;
