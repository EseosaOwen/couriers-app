import React from "react";
import { styled } from "styled-components";
import { BsTelephoneOutboundFill } from "react-icons/bs";

export default function ContactDelivery() {
  return (
    <Container>
      <TopContent>
        <h2>
          We provide <span>future</span> of delivery
        </h2>
        <ContactCards>
          <ContactCard>
            <figure>
              <BsTelephoneOutboundFill size={30} />
            </figure>
            <div>
              <h3>Phone</h3>
              <p>+234 08113623694</p>
              <p>+234 08113623695</p>
            </div>
          </ContactCard>
          <ContactCard>
            <figure>
              <BsTelephoneOutboundFill size={30} />
            </figure>
            <div>
              <h3>Address</h3>
              <p>4621 Hill Craft Farm Road</p>
            </div>
          </ContactCard>
          <ContactCard>
            <figure>
              <BsTelephoneOutboundFill size={30} />
            </figure>
            <div>
              <h3>Emails</h3>
              <p>worldwidecouriers@site.com</p>
              <p>worldwidecouriers@gmail.com</p>
            </div>
          </ContactCard>
        </ContactCards>
      </TopContent>
      <Map>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0432900125843!2d7.467154909280291!3d9.059815988470978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b1ab5e16c05%3A0x8bd3047109e0b4ba!2s8%20Mano%20Cl%2C%20Wuse%20904101%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1681856291031!5m2!1sen!2sng"
          //   style={style}
          allowFullScreen="true"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="google-maps"
        ></iframe>
      </Map>
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
  }
`;

const Map = styled.div`
  iframe {
    width: 100%;
    position: relative;
    z-index: 0;
    margin: 0;
    height: 60vh;
    padding: 0;
  }
`;

const TopContent = styled.div`
  h2 {
    font-family: Poppins;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;

    @media (max-width: 500px) {
      font-size: 1.5rem;
      width: 100%;
    }
    span {
      color: ${primary};
      font-family: Poppins;
    }
  }
`;

const ContactCards = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ContactCard = styled.div`
  display: flex;
  justify-content: center;
  flex: 0.5;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 1rem;
  }

  figure {
    flex: 0.3;
    padding: 1rem;
    background: ${primary};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 0.9rem;
  }

  div {
    flex: 1;
    padding: 1rem;
  }

  &:nth-child(2) {
    figure {
      background: ${secondary};
    }
  }
`;
