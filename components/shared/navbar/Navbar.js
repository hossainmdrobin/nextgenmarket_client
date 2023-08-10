import React from "react";
import Tabs from "./Tabs";
import { BiSolidUser } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import LogoTabs from "./LogoTabs";

const Navbar = () => {
  return (
    <div className="">
      <div className="w-[90%] mx-auto h-[100px] flex items-center justify-between">
        <div className="w-[20%]">
          <h1>nexgenmarket</h1>
        </div>
        <div className="flex w-[40%]">
          <Tabs name="HOME" link="/" />
          <Tabs name="SELL PRODUCT" link="/seller" />
          <Tabs name="DASHBOARD" link="/seller" />
          <Tabs name="BLOG" link="/blog" />
        </div>
        <div className="flex items-center justify-end w-[40%]">
          <LogoTabs name="LOGIN/REGISTER" link="/login">
            <BiSolidUser className="text-lg" />
          </LogoTabs>
          <LogoTabs name="WISHLIST" link="/wishlist">
            <BsFillHeartFill />
          </LogoTabs>
          <div>
            <h4>CART(1)</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
