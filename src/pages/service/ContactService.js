import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { styled } from "styled-components";

export default function ContactService() {
  return (
    <Container>
      <figure>
        <img src="/assets/images/sea-transport.jpg" alt="" />
      </figure>
      <Content>
        <h2>You Need any help? Get free consultation</h2>
        <div>
          <figure>
            <BsFillTelephoneFill />
          </figure>
          <div>
            <p>Have any question?</p>
            <h4>+19524357106</h4>
          </div>
        </div>
        <div className="button-57" role="button">
          <span className="text">Contact us</span>
          <span>Contact us</span>
        </div>
      </Content>
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
  display: flex;
  gap: 1rem;
  align-items: center;
  position: relative;

  @media (max-width: 1000px) {
    > figure {
      display: none;
    }
  }

  > figure {
    flex: 0.8;

    img {
      width: 100%;
    }
  }

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

const Content = styled.div`
  background: #0e122a;
  padding: 1rem;
  color: ${bg};
  position: absolute;
  width: 50%;
  top: 30%;
  right: 10%;
  padding: 4rem 2rem;

  @media (max-width: 1000px) {
    position: relative;
    top: initial;
    left: initial;
    right: initial;
    width: 100%;
  }

  h2 {
    font-family: Poppins;
    font-size: 2rem;
    color: ${bg};
    margin-bottom: 1rem;

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    figure {
      padding: 1rem;
      background: ${primary};
      /* border: solid 5px #e11756; */
      width: fit-content;
      text-align: center;
      place-items: center;
      border-radius: 50%;
    }

    div {
      h4 {
        font-size: 1.8rem;
        color: ${primary};
        margin-top: 0.5rem;
      }
    }
  }
`;
