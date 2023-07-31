import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";
import { BsChevronUp } from "react-icons/bs";
import Footer from "./Footer";

export default function SharedLayout() {
  const [moveToTop, setMoveToTop] = React.useState("move-top");

  React.useEffect(() => {
    function handleBackToTop() {
      if (window.pageYOffset > 450) {
        setMoveToTop("move-top show");
      } else {
        setMoveToTop("move-top");
      }
    }

    window.addEventListener("scroll", handleBackToTop);

    return () => {
      window.removeEventListener("scroll", handleBackToTop);
    };
  }, []);

  return (
    <Container>
      <NavBar />
      <div className={moveToTop} onClick={() => window.scrollTo(0, 0)}>
        <span className="text">
          <BsChevronUp size={20} />
        </span>
        <span>
          <BsChevronUp size={20} />
        </span>
      </div>
      <Outlet />
      <Footer />
    </Container>
  );
}

const primary = "#E11756";
const secondary = "#FCCC0A";
const heroText = "#BFC1C2";
const bg = "#fff";
const dark = "#757677";

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  position: relative;

  .move-top {
    position: fixed;
    overflow: hidden;
    border: 1px solid ${primary};
    color: ${bg};
    display: inline-block;
    font-size: 15px;
    line-height: 15px;
    padding: 1rem;
    text-decoration: none;
    cursor: pointer;
    background: ${primary};
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    /* border-radius: 50%; */
    z-index: 9999;
    top: 90%;
    right: 2%;
    opacity: 0;
    transition: all 0.2s linear;
  }

  .move-top span:first-child {
    position: relative;
    transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
    z-index: 10;
  }

  .move-top span:last-child {
    color: ${primary};
    display: block;
    position: absolute;
    width: 100%;
    text-align: center;
    /* bottom: 0; */
    transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
    z-index: 100;
    opacity: 0;
    /* top: 50%; */
    left: 50%;
    transform: translateX(-50%);
    /* height: 14px; */
    /* line-height: 13px; */
  }

  .move-top:after {
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

  .move-top:hover:after {
    transform-origin: bottom center;
    transform: skewY(9.3deg) scaleY(2);
  }

  .move-top:hover span:last-child {
    transform: translateX(-50%) translateY(-100%);
    opacity: 1;
    transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
  }

  .move-top.show {
    opacity: 1;
    transition: all 0.2s linear;
  }
`;
