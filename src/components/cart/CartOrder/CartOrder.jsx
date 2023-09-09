import "./CartOrder.scss";
import MyButton from "../../UI/myButton/MyButton";
import axios from "axios";
import { useId, useState } from "react";
import { useTotalPrice } from "../../../hooks/useTotalPrice";
const CartOrder = ({ id, setCart, cart, setOrder }) => {
  async function order() {
    try {
      const data = await axios.post("http://localhost:4400/orders", {
        id: id,
        cart,
      });

      for (let i = 0; i < data.data.length; i++) {
        let el = data.data[i];
        setTimeout(() => {
          axios.delete(`http://localhost:4000/cart/${el.id}`);
        }, 1000);
      }
      setOrder(true);
      setCart([]);
      return data.data;
    } catch (e) {
      alert("Ошибка при создании заказа");
    }
  }
  const totalPrice = useTotalPrice(cart);
  const toNumbertotalPrice = parseInt(totalPrice.split(" ").join(""));
  const nalog = toNumbertotalPrice * 0.05;
  const result = toNumbertotalPrice * 0.95;
  return (
    <div className="order">
      <ul className="order__total">
        <li className="order__item">
          <span>Итого</span>
          <div></div>
          <b>{result.toFixed(2)} руб</b>
        </li>
        <li className="order__item">
          <span>Налог 5%</span>
          <div></div>
          <b>{nalog.toFixed(2)} руб </b>
        </li>
      </ul>
      <MyButton onClick={order}>
        Оформить заказ
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
        >
          <path
            d="M1 7H14.7143"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.71436 1L14.7144 7L8.71436 13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </MyButton>
    </div>
  );
};

export default CartOrder;
