import styled from "styled-components";

export default function ContactForm() {
  return (
    <Container>
      <div>
        <h1 className="section-headers">
          Get a <span>Quote</span>
        </h1>
      </div>
      <FormBox>
        <figure>
          {/* <img src="/assets/images/contact_address.svg" alt="contact-picture" /> */}
        </figure>
        <Form>
          <main>
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
          </main>
          <textarea
            name=""
            id=""
            cols={30}
            rows={8}
            placeholder="Enter your message"
          ></textarea>
          <div className="button-57" role="button">
            <span className="text">Track Shipment</span>
            <span>Track Shipment</span>
          </div>
        </Form>
      </FormBox>
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
// const secondary = "#FCCC0A";
// const heroText = "#BFC1C2";
const bg = "#fff";
// const dark = "#020";

const Container = styled.section`
  padding: 3rem;

  @media (max-width: 500px) {
    padding: 1.5rem;
    margin-bottom: 3rem;
  }

  > div {
    h1 {
      font-size: 2rem;
      color: black;
      font-family: Poppins;
      > span {
        color: ${primary};
        font-family: Poppins;
      }
    }
  }
`;

const BottomContainer = styled.div``;

const FormBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  flex-direction: row-reverse;

  @media (max-width: 700px) {
    flex-direction: column;
  }

  figure {
    flex: 0.6;

    @media (max-width: 700px) {
      width: 60%;
    }

    @media (max-width: 500px) {
      width: 100%;
    }

    img {
      width: 100%;
    }
  }
`;

const Form = styled.div`
  flex: 1;
  margin-bottom: 2rem;

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }

  main {
    display: flex;
    gap: 1rem;

    @media (max-width: 500px) {
      flex-direction: column;
    }

    > div {
      position: relative;
      width: 80%;
      height: fit-content;

      @media (max-width: 700px) {
        width: 85%;
      }

      @media (max-width: 500px) {
        width: 100%;
      }

      .password-field {
        padding-right: 3rem;
      }

      input {
        display: block;
        padding: 0.5rem;
        height: 45px;
        border: solid 1px rgb(224, 223, 223);
        outline: none;
        width: 100%;
        margin-bottom: 1rem;
        font-family: Euclid;
        font-size: 1rem;

        @font-face {
          font-family: Euclid;
          src: url("../public/assets/euclid-circular-a-cufonfonts/Euclid\ Circular\ A\ Regular.ttf");
        }

        &:focus {
          border-color: ${primary};
        }
      }

      .hide-text {
        outline: none;
        border: none;
        background: none;
        position: absolute;
        z-index: 1;
        top: 30%;
        right: 3%;
        transform: translateY(-30%);
        color: #5f5f5f;
        color: ${primary};
        cursor: pointer;
        padding: 0.5rem 0;
        font-size: 0.82rem;
      }
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

  textarea {
    display: block;
    padding: 0.5rem;
    border: solid 1px rgb(224, 223, 223);
    outline: none;
    width: 100%;
    margin-bottom: 1rem;
    font-family: Euclid;
    font-size: 1rem;
    resize: none;

    @font-face {
      font-family: Euclid;
      src: url("../public/assets/euclid-circular-a-cufonfonts/Euclid\ Circular\ A\ Regular.ttf");
    }

    &:focus {
      border-color: ${primary};
    }
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
