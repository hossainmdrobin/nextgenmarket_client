import Link from "next/link";
import React from "react";

const Tabs = ({ name, link }) => {
  return (
    <Link href={link}>
      <h4 className="site__button h-[99px] px-4 cursor-default flex items-center justify-center">
        <span className="relative site__button_child">{name}</span>
      </h4>
    </Link>
  );
};

export default Tabs;
