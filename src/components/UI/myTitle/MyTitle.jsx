import React from "react";
import cs from "./myTitle.module.css";
const MyTitle = ({ children, ...props }) => {
  return (
    <h1 className={cs.title} {...props}>
      {children}
    </h1>
  );
};

export default MyTitle;
