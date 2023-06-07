/* eslint-disable no-unused-vars */

import "swiper/css";
import "swiper/css/navigation";

import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import slider1 from "../../assets/slider-1.jpg";
import slider2 from "../../assets/slider-2.jpg";
import slider3 from "../../assets/slider-3.jpg";
import slider4 from "../../assets/slider-4.jpg";
const Slider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper my-2"
      >
        <SwiperSlide className="relative">
          <img src={slider1} alt="" />
          <div className="overlay absolute text-white top-0 ">
            <p className="text-4xl lg:my-32 lg:ml-28">
              Putting children first. <br /> Preparing children for <br /> success in life.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slider2} alt="" />
          <div className="overlay absolute text-white top-0 ">
            <p className="text-4xl lg:my-32 lg:ml-28"> Teaching Turning todays <br />
             learners into tomorrows leaders. </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slider3} alt="" />
          <div className="overlay absolute text-white top-0 ">
            <p className="text-4xl lg:my-32 lg:ml-28">Every students Matters, <br /> every moments count</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slider4} alt="" />
          <div className="overlay absolute text-white top-0 my-auto ">
            <p className="text-4xl lg:my-32 lg:ml-28">To Have another language <br /> is to posses a second soul.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
