/* eslint-disable react/prop-types */
import "./Cart.scss";
import CartList from "./CartList/CartList";
import CartOrder from "./CartOrder/CartOrder";

import { useContext, useState } from "react";
import { AppContext } from "../../context/context";
import CartInfo from "../UI/cartInfo/CartInfo";
const Cart = ({ setCart, setOpenCart, state }) => {
  const { cart } = useContext(AppContext);
  const id = Date.now();
  function closeCart(e) {
    e.stopPropagation();
    setOpenCart(false);
  }
  const [order, setOrder] = useState(false);

  return (
    <>
      <div onClick={closeCart} className={`overlay`}></div>
      <div className={`cart ${state}`}>
        <div className="cart__body">
          <div className="cart__top">
            <h2>Корзина</h2>
            <button onClick={closeCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="31"
                  height="31"
                  rx="7.5"
                  fill="white"
                  stroke="#F2F2F2"
                />
                <path
                  d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                  fill="#D3D3D3"
                />
              </svg>
            </button>
          </div>
          {cart.length && !order > 0 ? (
            <>
              <CartList setCart={setCart} cart={cart} />
              <CartOrder
                id={id}
                cart={cart}
                setCart={setCart}
                setOrder={setOrder}
              />
            </>
          ) : order ? (
            <CartInfo
              title="Заказ оформлен!"
              img="src/assets/img/orderComplete.svg"
              alt="Empty"
              description={`Ваш заказ ${id} скоро будет передан курьерской доставке`}
            />
          ) : (
            <CartInfo
              title="Корзина пустая "
              img="src/assets/img/cartEmpty.svg"
              alt="Empty"
              description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
