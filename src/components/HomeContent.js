import React, { useContext } from "react";
import { SancorpContext } from "./context";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import ServicesContent from "./ServicesContent";
import home from '../images/home.jpg'

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

       <div className="d-none d-md-block">
       <ImageSlider homeSlides={homeSlides} arrow={arrow} />
       </div>
       <div className="d-block d-md-none home-image p-2">
        
            <img src={home} alt="home image" />
            <h2>introduction to oil and gas industry</h2>

       </div>


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
