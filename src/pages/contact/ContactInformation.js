import React from "react";
import styled from "styled-components";
import { IoLocation } from "react-icons/io5";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";

export default function ContactInformation() {
  return (
    <Container>
      <ContactCards>
        <Cards className="contacts">
          <CardIcon>
            <IoLocation size={35} color={primary} />
          </CardIcon>
          <h3>Post Address</h3>
          <p>Blantyre, 904102 wuse 2 - Abuja</p>
        </Cards>
        <Cards className="contacts">
          <CardIcon>
            <BsTelephoneFill size={35} color={primary} />
          </CardIcon>
          <h3>Contact Phone</h3>
          <p>
            <a href="tel:+2348113623694">(+234) 811-362-3694</a>
          </p>
        </Cards>
        <Cards className="contacts">
          <CardIcon>
            <AiOutlineMail size={35} color={primary} />
          </CardIcon>
          <h3>E-mail Address</h3>
          {/* <p><a href="#">cleanclycle@gmail.com</a></p> */}
          <p>
            <a href="mailto:cleanclycle2023@gmail.com?subject=Feedback%20on%20your%20website&body=Hello,%0D%0A%0D%0AI%20wanted%20to%20share%20some%20feedback%20on%20your%20website.%20...">
              worldwidecouriers@gmail.com
            </a>
          </p>
        </Cards>
        <Cards className="contacts">
          <CardIcon>
            <AiOutlineClockCircle size={35} color={primary} />
          </CardIcon>
          <h3>Opening Hours</h3>
          <p>Mon - Fri: 9:00am - 7:00pm</p>
          <p>Sat - Sun: 11:00am - 16:00pm</p>
        </Cards>
      </ContactCards>
    </Container>
  );
}

// ========================== STYLES ========================= \\

// =============== Root Variables

const gray = "#545454";
const primary = "#E11756";
const secondary = "#FCCC0A";
// const heroText = "#BFC1C2";
// const bg = "#fff";
// const dark = "#020";

const Container = styled.section`
  margin-top: 4rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 868px) {
    margin-bottom: 3rem;
  }
`;

const ContactCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 2rem;
  margin-top: 1.34rem;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: 868px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
  }
`;

const Cards = styled.div`
  flex: 0.5;
  text-align: center;

  h3 {
    margin-bottom: 0.7rem;
  }

  p {
    color: ${gray};

    a {
      color: ${gray};
      text-decoration: none;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: ${secondary};
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;

const CardIcon = styled.div`
  border-radius: 50%;
  padding: 1.5rem;
  box-shadow: 0 0 16px 5px rgb(240, 240, 240);
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 1.3rem;

  img {
  }
`;
