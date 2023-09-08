import React from "react";
import cs from "./MyButtons.module.scss";
const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={cs.btn}>
      {children}
    </button>
  );
};

export default MyButton;
