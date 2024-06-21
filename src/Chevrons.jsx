import React from "react";

const Chevrons = ({ chevrons }) => {
  return chevrons.map((chevron, index) => (
    <div
      className="chevron flex-sm-grow-1"
      key={chevron.id}
      style={{ opacity: 1 - index * (0.8 / (chevrons.length - 1)) }}
    ></div>
  ));
};

export default Chevrons;
