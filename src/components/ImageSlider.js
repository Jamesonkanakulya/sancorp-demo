import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useSpring, animated } from "react-spring";

function ImageSlider({ homeSlides, hieghtx, arrow }) {
  const [showArrow, setShowArrow] = useState(false);

  const handleArrow = () => {
    setShowArrow(false);
  };

  // useEffect(() => {
  //   handleArrow();
  // }, []);

  const show = () => {
    setShowArrow(true);
  };
  const hide = () => {
    setShowArrow(false);
  };

  function SampleNextArrow(props) {
    if (showArrow) {
      const { className, style, onClick } = props;
      return (
        <div
          onMouseEnter={arrow ? show : hide}
          onMouseLeave={arrow ? hide : null}
          className={className}
          style={{
            ...style,
            display: "block",
            background: "black",
            left: "96%",
            color: "white",
            borderRadius: "0.5rem",
          }}
          onClick={onClick}
        />
      );
    } else {
      return null;
    }
  }

  function SamplePrevArrow(props) {
    if (showArrow) {
      const { className, style, onClick } = props;
      return (
        <div
          onMouseEnter={arrow ? show : hide}
          onMouseLeave={arrow ? hide : null}
          className={className}
          style={{
            ...style,
            display: "block",
            background: "black",
            color: "red",
            zIndex: "1",
            left: "2%",
            borderRadius: "0.5rem",
          }}
          onClick={onClick}
        />
      );
    } else {
      return null;
    }
  }

  const springProps = useSpring({
    to: [{ opacity: 1, color: "#ffaaee" }],
    from: { opacity: 0.5, color: "red" },
  });

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    speed: 4000,
    // cssEase: "linear",
    lazyLoad: true,
    autoplaySpeed: 7000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {homeSlides.map((item) => (
          <div
            key={item.key}
            className="imageSlider"
            onMouseEnter={arrow ? show : hide}
            onMouseLeave={arrow ? hide : null}
          >
            {/* <animated.div style={springProps }>I will fade in and out</animated.div> */}
            <h2> {item.title}</h2>
            <img
              style={{ height: hieghtx }}
              src={item.imagez[0]}
              alt={item.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
