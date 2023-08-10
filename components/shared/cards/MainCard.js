import React from "react";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "./mainCard.module.css"

const MainCard = ({ item,height }) => {
    const {eye__button,main__card, heart__button, cart__button} = styles;
    const cardHeight = height?`h-[${height}]` : "h-[350px]"
  return (
    <div>
      <div className={`relative ${cardHeight} ${main__card} bg-red-300 group`}>
      <div>
        <img
          className={`${cardHeight}`}
          width="100%"
          src={item?.photos[0]?.path.src}
          alt="pppp"
        />
      </div>
      <button className={`shadow site__button ${cart__button}`}>
        <span className=" relative">
          <h4 className="inline-block site__button_child py-2">Add to cart</h4>
        </span>
      </button>
      <span className={`${eye__button}`}>
        <BsEye />
      </span>
      <span className={`${heart__button}`}>
        <AiOutlineHeart />
      </span>
    </div>
    <div className="my-1 flex items-center justify-between">
      <p>Product name</p>
      <p>$566</p>
    </div>
    </div>
  );
};

export default MainCard;
