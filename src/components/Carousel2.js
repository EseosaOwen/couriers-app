import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { styled } from "styled-components";

export const Carousel2 = () => {
  const sliderData = [
    {
      id: 1,
      header: "Cargo Insurance",
      content: "Mauris eu velit ac mauris tincidunt mattis. Etiam cursus vel",
      image: "insurance-dollar.png",
    },
    {
      id: 2,
      header: "Online Tracking",
      content:
        "Ut viverra, ante ut mattis mollis, felis felis eleifend dolor, non suscipit",
      image: "box-checking.png",
    },
    {
      id: 3,
      header: "Box checking",
      content: "Maecenas pharetra accumsan venenatis. Nam ut aliquam erat",
      image: "box-checking.png",
    },
  ];

  const CustomPrevButton = (props) => {
    const { className, style, onClick } = props;
    return (
      <ButtonPrev>
        <FaChevronLeft
          className={className}
          onClick={onClick}
          color={primary}
        />
      </ButtonPrev>
    );
  };

  // Custom next button component
  const CustomNextButton = (props) => {
    const { className, style, onClick } = props;
    return (
      <ButtonNext>
        <FaChevronRight
          className={className}
          onClick={onClick}
          color={primary}
        />
      </ButtonNext>
    );
  };

  // Customize the carousel options as required
  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevButton />, // Add your custom previous button component
    nextArrow: <CustomNextButton />,
    responsive: [
      {
        breakpoint: 1024, // Screen size between 1024px and 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Screen size below 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
    // You can check the documentation for more available options
  };

  return (
    <Container>
      <Slider {...carouselSettings} className="main-slide">
        {sliderData.map((item) => (
          <div className="slider-container" key={item.id}>
            <aside>
              <div className="slider-slide">
                <figure>
                  <img src={`/assets/images/${item.image}`} alt={item.header} />
                </figure>
                <div className="slider-content">
                  <h3>{item.header}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            </aside>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

const primary = "#E11756";
// const secondary = "#FCCC0A";
// const heroText = "#BFC1C2";
const bg = "#fff";
const dark = "#757677";

const Container = styled.div`
  /* border: solid 2px yellow; */
  width: 87vw;
  margin: 0;
  padding: 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  .main-slide {
    padding: 0;
    > div {
    }
  }

  .slider-container {
  }

  aside {
    margin: 1rem;
    box-shadow: 0 0 10px 1px #54354d13;

    /* border: solid 2px green; */

    @media (max-width: 360px) {
      margin: 1.2rem;
    }
  }

  .testim-name {
    padding: 1rem;
    display: flex;
    gap: 1rem;

    figure {
      img {
        width: 55px;
        height: 55px;
      }
    }
    div {
    }
  }

  .slider-slide {
    padding: 1rem;
    background: ${bg};

    @media (max-width: 500px) {
      padding: 1rem;
      margin: 0 1rem;
    }

    figure {
      padding: 1rem;
      border-radius: 50%;
      background: linear-gradient(90deg, ${primary}, #940c6c);
      width: fit-content;
    }

    img {
      width: 30px;
      height: 30px;
    }

    .slider-content {
      margin-top: 1rem;
      h3 {
        font-size: 1.1rem;
        font-weight: 600;
      }
      p {
        color: ${dark};
      }
    }
  }
`;

const ButtonPrev = styled.div`
  position: absolute;
  left: 0%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  @media (max-width: 380px) {
    left: 5%;
  }
`;

const ButtonNext = styled.div`
  position: absolute;
  right: 0%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  color: ${primary};

  svg {
    color: ${primary};
  }

  @media (max-width: 380px) {
    right: 5%;
  }
`;
