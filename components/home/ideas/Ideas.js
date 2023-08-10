import React from "react";
import IdeasCard from "./IdeasCard";
import idea1 from "./../../../assets/images/idea1.jpg";
import idea2 from "./../../../assets/images/idea2.jpg";

const Ideas = () => {
  return (
    <div className="mx-12 md:flex">
      <div>
        <IdeasCard photo={idea1} text="Some thing" />
      </div>

      <div>
        <IdeasCard photo={idea2} text="Some thing" />
      </div>
    </div>
  );
};

export default Ideas;
