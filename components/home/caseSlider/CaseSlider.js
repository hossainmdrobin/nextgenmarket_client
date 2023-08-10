import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import "swiper/css";
import p1 from "./../../../assets/images/p1.png";
import p2 from "./../../../assets/images/p2.png";
import p3 from "./../../../assets/images/p3.png";
import MainCard from "../../shared/cards/MainCard";

const products = [
  {
    name: "Product 1",
    price: "300",
    photos: [{ path: p1 }],
  },
  {
    name: "Product 2",
    price: "300",
    photos: [{ path: p2 }],
  },
  {
    name: "Product 3",
    price: "300",
    photos: [{ path: p3 }],
  },
  {
    name: "Product 1",
    price: "300",
    photos: [{ path: p1 }],
  },
  {
    name: "Product 2",
    price: "300",
    photos: [{ path: p2 }],
  },
  {
    name: "Product 3",
    price: "300",
    photos: [{ path: p3 }],
  },
];

const CaseSlider = () => {
  return (
    <div className="mx-12 mt-44">
      <div className="w-full">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            375: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          // modules={[Autoplay]}
          className="mySwiper"
        >
          {products.map((item, i) => (
            <SwiperSlide key={i}>
              <MainCard {...{ item }} />
            </SwiperSlide>
          ))}          
        </Swiper>
      </div>
    </div>
  );
};

export default CaseSlider;
