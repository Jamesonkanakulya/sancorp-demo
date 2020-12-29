import React, { useContext } from "react";
import { SancorpContext } from "./context";
import ImageSlider from "./ImageSlider";
import Team from "./Team";

function AboutContent() {
  const homepost = useContext(SancorpContext);
  const homeSlides = homepost.context;
  const arrow = false;

  return (
    <>
      <div className="container about-content p-2">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 my-4 ">
            <h6>
              Sancorp Group Limited (“Sancorp”) is a GBC 2 diversified financial
              services company incorporated in Mauritius and licensed by the
              Mauritius Financial Services Commission. Sancorp was founded in
              2016 by two experienced Energy & Infrastructure Investment Bankers
              with proven track records, spanning over two decades in the
              Financial Services sectors within sub-Saharan Africa.
            </h6>

            <p>
              Sancorp has as its advisory subsidiary, Sancorp Invest Limited
              (“SIL”), which is an independent corporate finance and investment
              advisory firm, registered in the Republic of Seychelles.
            </p>

            <p>
              SIL is a pan-African investment advisory firm, with offices in
              Lagos and Mauritius, and a core competence in the following
              sectors
            </p>
            <div className="row ">
              {homeSlides.map((item, i) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 dealed-items "
                  key={i}
                >
                  <h6>{item.title}</h6>
                  <img src={item.imagez[0]} alt={item.title} />
                </div>
              ))}
            </div>
          </div>
          <div
            style={{ height: "27rem", overflow: "hidden" }}
            className="col-lg-6 col-md-6 col-sm-12 my-4  d-none d-md-block"
          >
            <ImageSlider
              className="position-absolute"
              homeSlides={homeSlides}
              hieghtx="27rem"
              arrow={arrow}
            />
          </div>
        </div>
      </div>
      <Team />
    </>
  );
}

export default AboutContent;
