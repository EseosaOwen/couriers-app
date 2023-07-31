import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { RiSearch2Line } from "react-icons/ri";

export default function NavBar() {
  const [hiddenNav, setHiddenNav] = React.useState("hidden-nav");
  const [toggleIcon, setToggleIcon] = React.useState("toggler-icon");
  const [isOpen, setIsOpen] = React.useState(false);

  const location = useLocation();

  function onToggle() {
    hiddenNav === "hidden-nav"
      ? setHiddenNav("hidden-nav active")
      : setHiddenNav("hidden-nav");
    toggleIcon === "toggler-icon"
      ? setToggleIcon("toggler-icon toggle")
      : setToggleIcon("toggler-icon");
    setIsOpen((old) => {
      return old === true ? false : old;
    });
  }

  React.useEffect(() => {
    setHiddenNav("hidden-nav");
    setToggleIcon("toggler-icon");
  }, [location]);

  return (
    <Container className="" id="navbar">
      <Link to="/">
        <div className="logo">
          <img src="/assets/images/logo.png" />
        </div>
      </Link>

      <Nav className="nav1">
        <ul>
          <li>
            <HeaderLinks to="">Home</HeaderLinks>
          </li>
          <li>
            <HeaderLinks to="/about">About</HeaderLinks>
          </li>
          <li>
            <HeaderLinks to="/services">Services</HeaderLinks>
          </li>
          <li>
            <HeaderLinks to="/contact">Contact</HeaderLinks>
          </li>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div className="button-57" role="button">
              <span className="text">Track Shipment</span>
              <span>Track Shipment</span>
            </div>
          </Link>
        </ul>
      </Nav>

      <main>
        <HiddenLink to="/login" style={{ textDecoration: "none" }}>
          <div className="button-57" role="button">
            <span className="text">Track Shipment</span>
            <span>Track Shipment</span>
          </div>
        </HiddenLink>

        <div className="toggler">
          <div className={toggleIcon} onClick={onToggle}>
            <div className="line-one"></div>
            <div className="line-two"></div>
            <div className="line-three"></div>
          </div>
        </div>
      </main>

      <HiddenNav className={hiddenNav}>
        <ul>
          <li>
            <HeaderLinks to="/">Home</HeaderLinks>
          </li>
          <li>
            <HeaderLinks to="/about">About</HeaderLinks>
          </li>
          <li>
            <HeaderLinks to="/categories">Categories</HeaderLinks>
          </li>
          <li>
            <HeaderLinks to="/contact">Contact</HeaderLinks>
          </li>
        </ul>
      </HiddenNav>
    </Container>
  );
}

const primary = "#E11756";
const secondary = "#FCCC0A";
const heroText = "#BFC1C2";
const bg = "#fff";
const dark = "#020";

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
  position: sticky;
  z-index: 999999999;
  top: 0;
  background: ${bg};
  box-shadow: 0px 2px 4px rgba(30, 30, 30, 0.09);

  @media (max-width: 500px) {
    padding: 0;
  }

  > a:first-of-type {
    flex: 0.2;
    text-align: start;
    /* border: solid 2px red; */
    @media (max-width: 800px) {
      flex: 0.3;
      text-align: start;
    }
  }

  .logo {
    flex: 0.2;
    text-align: start;
    padding: 0.5rem;

    img {
      width: 120px;
      height: 50px;
    }
    /* border: solid 2px red; */
  }

  .nav1 {
    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  .nav2 {
    justify-content: end;

    @media screen and (max-width: 350px) {
      display: none;
    }
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
    margin: 0 auto;
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

  .hidden-nav {
    display: none;

    @media screen and (max-width: 900px) {
      display: block;
    }
  }

  .hidden-nav.active {
    max-height: 400px;
    overflow: visible;
    transition: all 0.3s ease;
  }

  main {
    flex: 1;
    display: flex;
    align-items: center;
    display: none;
    justify-content: end;
    gap: 0.65rem;

    @media (max-width: 900px) {
      display: flex;
    }

    @media (max-width: 500px) {
      padding-right: 0.7rem;
    }
  }
`;

const HiddenLink = styled(Link)`
  @media (max-width: 360px) {
    display: none;
  }
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 1rem;

  > ul {
    display: flex;
    gap: 1rem;
    align-items: center;
    list-style: none;
    justify-content: start;
    padding: 0;

    li {
      flex: 0.5;
      position: relative;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

      &:hover {
        a {
          color: ${primary};
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
      }
    }
  }

  > div:first-of-type {
    display: flex;
    gap: 2rem;
    align-items: center;

    .searchBox {
      border: none;
      outline: none;
      height: 30px;
      border-bottom: solid 1px gray;
      font-size: 1rem;
      width: 50%;
    }
  }
`;

const HiddenNav = styled.nav`
  position: absolute;
  /* bottom: ; */
  top: 100%;
  background-color: white;
  width: 50%;
  right: 0;
  max-height: 0px;
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(30, 30, 30, 0.09);

  @media (max-width: 500px) {
    width: 100%;
  }

  ul {
    display: flex;
    gap: 2rem;
    align-items: start;
    list-style: none;
    justify-content: start;
    padding: 0;
    flex-direction: column;
    padding: 1rem;
    /* width */

    li {
      flex: 0.5;
      position: relative;

      &:hover {
        a {
          color: ${primary};
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
      }
    }
  }
`;

const HeaderLinks = styled(NavLink)`
  color: #5c5c5c;
  text-decoration: none;
  text-align: center;
  padding: 0.5rem;
  font-size: 1.1rem;

  &.active {
    color: ${primary};
  }
`;
