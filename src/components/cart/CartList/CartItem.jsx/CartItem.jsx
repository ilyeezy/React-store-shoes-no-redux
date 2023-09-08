/* eslint-disable react/prop-types */
import "./CartItem.scss";

const CartItem = ({ cartItem, removeItem, plusQuantity, minusQuantity }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__body">
        <div className="cart-item__img">
          <img width={70} height={70} src={cartItem.img} alt="=)" />
        </div>
        <div className="cart-item__info">
          <h5>{cartItem.title}</h5>
          <p>
            Количество:
            <span
              onClick={() => plusQuantity(cartItem)}
              className="material-symbols-outlined"
            >
              add
            </span>
            {cartItem.quantity}
            <span
              onClick={() => minusQuantity(cartItem)}
              className="material-symbols-outlined"
            >
              remove
            </span>
          </p>
          <b>{cartItem.price}</b>
        </div>
        <button onClick={() => removeItem(cartItem)}>
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
    </div>
  );
};

export default CartItem;
