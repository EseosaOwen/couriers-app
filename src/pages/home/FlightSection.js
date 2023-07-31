import { styled } from "styled-components";
import { BsBusFrontFill, BsTrainFreightFrontFill } from "react-icons/bs";

export default function FlightSection() {
  return (
    <Container>
      <div>
        <figure>
          <img src="/assets/images/service1.webp" alt=""/>
        </figure>
        <div>
          <BsBusFrontFill size={25} color={primary} />
          <h2>Shipping Freight</h2>
          <p>
            Vivamus tristique nibh vel purus ultricies viverra. Phasellus est
            dolor purus tristique
          </p>
        </div>
      </div>
      <div>
        <div>
          <BsTrainFreightFrontFill size={25} color={primary} />
          <h2>Train Freight</h2>
          <p>
            Vivamus tristique nibh vel purus ultricies viverra. Phasellus est
            dolorr
          </p>
        </div>
        <figure>
          <img src="/assets/images/service1.webp" alt="" />
        </figure>
      </div>
    </Container>
  );
}

const primary = "#E11756";
// const secondary = "#FCCC0A";
// const heroText = "#BFC1C2";
// const bg = "#fff";
// const dark = "#757677";

const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  padding: 3rem;

  @media (max-width: 500px) {
    padding: 1.5rem;
  }

  > div {
    display: flex;
    align-items: center;

    figure {
      flex: 0.5;
      img {
        width: 100%;
      }
    }
    div {
      flex: 0.5;
      padding: 1rem;

      svg {
        margin-bottom: 1rem;
      }

      h2 {
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }
      p {
        @media (max-width: 500px) {
          font-size: 0.9rem;
        }
      }
    }
    &:first-of-type {
      border-right: solid 2px ${primary};
      @media (max-width: 800px) {
        border: none;
      }
    }
  }
`;
