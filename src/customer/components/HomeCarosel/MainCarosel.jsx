import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCaroselData } from "./MainCaroselData";

const MainCarousel = () => {
  const items = mainCaroselData.map((item) => (
    <img
      className="cursor-pointer"
      role="presentation"
      src={item.image}
      alt={item.title}
    />
  ));
  return (
    <div style={{position:'relative', zIndex:'-50'}}>
      <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
    </div>
  );
};

export default MainCarousel;
