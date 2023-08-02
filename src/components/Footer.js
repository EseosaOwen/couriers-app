import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <Container>
      <Left>
        <div>
          <Link to="/">
            <div className="logo">
              {/* <a href=""> */}
              <img src="/assets/images/logo.png" alt="" />
              {/* </a> */}
            </div>
          </Link>
          <Socials>
            <a href="https://www.facebook.com/cleancycle_project/">
              <FaFacebook size="20" />
            </a>
            <a href="https://www.instagram.com/cleancycle_project/">
              <FaInstagram size="20" />
            </a>
            <a href="https://www.twitter.com/cleancycle_project/">
              <FaTwitter size="20" />
            </a>
            <a href="https://www.linkedin.com/cleancycle_project/">
              <FaLinkedin size="20" />
            </a>
          </Socials>
        </div>
        <div className="footer-except">
          <h3>Embrace the Tech Renaissance: </h3>
          <p>
            Stay Informed, Inspired, and Connected with the Latest in the World
            of Technology. Let our blog be your compass on the path of digital
            transformation and technological advancements.
          </p>
        </div>
      </Left>
      <Right>
        <div className="links">
          <div>
            <h3>Pages</h3>
            <ul>
              <Link to="">
                <li>About Us</li>
              </Link>
              <Link to="">
                <li>Services</li>
              </Link>
              <Link to="">
                <li>Contact</li>
              </Link>
              <Link to="">
                <li>Popular</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <Link to="">
                <li>FAQ</li>
              </Link>
              <Link to="">
                <li>Contact Us</li>
              </Link>
              <Link to="">
                <li>Privacy Policy</li>
              </Link>
              <Link to="">
                <li>Terms of Service</li>
              </Link>
            </ul>
          </div>
          {/* <div>
            <h3>Articles</h3>
            <ul>
              <Link to="">
                <li>Smart Homes: Transforming the Way We Live</li>
              </Link>
              <Link to="">
                <li>Data Privacy: Keeping Your Information Secure</li>
              </Link>
              <Link to="">
                <li>Cybersecurity Essentials: Protecting Your Digital Life</li>
              </Link>
            </ul>
          </div> */}
        </div>
        <div className="copyright">
          <p>
            ©2023 <span>Worldwide Couriers.</span> All rights reserved. |
            Privacy Policy | Terms of Service
          </p>
        </div>
      </Right>
    </Container>
  );
}

const primary = "#E11756";
const secondary = "#FCCC0A";
// const heroText = "#BFC1C2";
// const bg = "#fff";
// const dark = "#757677";

const Container = styled.footer`
  background-color: ${secondary};
  display: flex;
  justify-content: center;
  padding: 5rem 3rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    padding: 5rem 1.5rem;
  }
`;

const Left = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div:first-of-type {
    margin-bottom: 7rem;

    @media screen and (max-width: 1000px) {
      margin-bottom: 3rem;
    }
  }

  .footer-except {
    h3 {
      margin-bottom: 1rem;
      color: ${primary};
      font-weight: bold;
    }

    p {
      color: #212121;
    }
  }

  .logo {
    flex: 0.2;
    text-align: start;
    margin-bottom: 1.5rem;

    a {
      img {
        width: 100px;
      }
    }

    @media (max-width: 1000px) {
      flex: 1;
      text-align: start;
    }
  }
`;

const Right = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    margin-top: 3rem;
  }

  .links {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1000px) {
      margin-bottom: 3rem;
    }

    @media screen and (max-width: 600px) {
      flex-direction: column;
    }

    div {
      flex: 0.5;

      @media screen and (max-width: 600px) {
        margin-bottom: 2rem;
      }

      h3 {
        font-weight: bold;
        margin-bottom: 1rem;
        color: ${primary};
      }

      ul {
        list-style: none;

        a {
          text-decoration: none;
          color: #545454;

          &:hover {
            color: ${primary};
          }

          li {
            margin-bottom: 1rem;
          }
        }
      }
    }
  }

  .copyright {
    text-align: end;

    @media screen and (max-width: 1000px) {
      text-align: start;
    }

    p {
      font-size: 0.9rem;

      span {
        color: ${primary};
      }
    }
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;

  svg {
    color: black;
    &:hover {
      color: ${primary};
    }
  }
`;
