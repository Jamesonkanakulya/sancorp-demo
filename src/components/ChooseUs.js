import React from "react";
import Graph from "./Graph";
import TitleOne from "./TitleOne";
import VideoPlayer from "./VideoPlayer";

function ChooseUs() {
  const GraphDetials = [
    {
      title: "profitablbe",
      percentage: 95,
      time: 3,
    },
    {
      title: "proffessional",
      percentage: 90,
      time: 4,
    },
    {
      title: "Availability",
      percentage: 92,
      time: 3,
    },
    {
      title: "relaliable",
      percentage: 99,
      time: 2,
    },
  ];

  return (
    <div >
      <TitleOne title="Why Choose Us" />
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 p-4">
          {GraphDetials.map((item, i) => (
            <Graph
              title={item.title}
              percentage={item.percentage}
              time={item.time}
            />
          ))}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 p-2">
         <VideoPlayer/>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
