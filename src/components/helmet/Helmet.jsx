import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Helmet = (props) => {
  document.title = "Artelak -" + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
