import React from "react";
import "./MainBaner.css";
import slide1 from "../assets/img/venecshtukaturka.png";
import slide2 from "../assets/img/energyinstruments.png";
import Flickity from "react-flickity-component";


const MainBaner = () => {
  
  const flickityOptions = {
    initialIndex: 1,
    wrapAround: true,
    autoPlay: 3000,
  };

  const films = {
    id: [1, 2],
    image: [slide1, slide2],
  };

  return (
    <div className="App">
      <Flickity
        className="Slider"
        elementType="div"
        disableImagesLoaded={false}
        options={flickityOptions}
        reloadOnUpdate
        static
      >
        {films["id"].map((index) => {
          return (
            <div key={index} className="Plate">
              <>
                {/* <div className="imageTitle">{films["title"][index - 1]}</div> */}
                <div
                  style={{
                    backgroundImage: `url(${films["image"][index - 1]})`,
                    width: "100%",
                    height: 400,
                    backgroundSize: "cover",
                    borderRadius: "0px",
                  }}
                  className="firstImg"
                ></div>
              </>
            </div>
          );
        })}
      </Flickity>
    </div>
  );
};

export default MainBaner;
