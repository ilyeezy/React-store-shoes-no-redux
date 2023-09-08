import React, { useContext } from "react";
import MyButton from "../myButton/MyButton";
import { AppContext } from "../../../context/context";
import "./CartInfo.scss";
const CartInfo = ({ img, title, description, alt }) => {
  const { setOpenCart } = useContext(AppContext);
  return (
    <div className="cartInfo">
      <div className="cartInfo__body">
        <div className="cartInfo__box-icon">
          <img src={img} alt={alt} />
        </div>
        <div className="cartInfo__info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <MyButton onClick={() => setOpenCart(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
          >
            <path
              d="M14.7144 7L1.00007 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 13L1 7L7 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span> Вернуться назад</span>
        </MyButton>
      </div>
    </div>
  );
};

export default CartInfo;
