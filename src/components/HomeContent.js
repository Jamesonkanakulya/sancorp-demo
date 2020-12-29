import React, { useContext } from "react";
import { SancorpContext } from "./context";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import ServicesContent from "./ServicesContent";

function HomeContent() {
  const homepost = useContext(SancorpContext);
  const homeSlides = homepost.context;
  const arrow = true;

  if (!homeSlides) {
    return (
      <div>
        <h1>LOADING ........</h1>
      </div>
    );
  } else {
    return (
    <>
      <div className="containter px-0 position-relative">
        <ImageSlider homeSlides={homeSlides} arrow={arrow} />
        <div className="footer-home-component">
          {homeSlides ? (
            <Footer
              mybackground="transparent"
              title1="Welcome to"
              title2="Sancorp Group Limited"
              footerParagraph="- A diversified financial services company"
              footercolor="white"
              footerParagraphColor="#777"
              postColor="#d16f12 "
            />
          ) : null}
        </div>
        
      </div>
      <ServicesContent/>
    </>
    );
  }
}

export default HomeContent;
