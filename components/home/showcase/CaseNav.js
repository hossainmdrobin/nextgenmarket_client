import React from "react";

const tabs = [
  {
    name: "Show All",
    query: "all",
  },
  {
    name: "Ceramics",
    query: "Ceramics",
  },
  {
    name: "Chair",
    query: "Ceramics",
  },
  {
    name: "Kitchen",
    query: "Ceramics",
  },
  {
    name: "Plates",
    query: "Ceramics",
  },
];

const CaseNav = () => {
  return (
    <div className="mb-8">
      {tabs.map((tab,i) => (
        <span className=" mx-3 cursor-default relative site__button" key={i}>
          <p className="inline site__button_child">{tab.name}</p>
        </span>
      ))}
    </div>
  );
};

export default CaseNav;
