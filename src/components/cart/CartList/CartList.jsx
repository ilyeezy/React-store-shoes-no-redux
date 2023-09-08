/* eslint-disable react/prop-types */
import CartItem from "./CartItem.jsx/CartItem";
import "../CartList/CartList.scss";
import axios from "axios";
const CartList = ({ cart, setCart }) => {
  function removeItem(cartItem) {
    axios.delete(`http://localhost:4000/cart/${cartItem.id}`);
    setCart((prev) => prev.filter((item) => item.id !== cartItem.id));
  }
  function plusQuantity(cartItem) {
    const updateItem = {
      ...cartItem,
      quantity: cartItem.quantity + 1,
    };
    const updateCart = cart.map((el) => {
      if (el.id === cartItem.id) {
        axios.put(`http://localhost:4000/cart/${cartItem.id}`, updateItem);
        return updateItem;
      }
      return el;
    });
    setCart(updateCart);
  }
  function minusQuantity(cartItem) {
    const updateItem = {
      ...cartItem,
      quantity: cartItem.quantity - 1,
    };
    if (cartItem.quantity === 1) {
      removeItem(cartItem);
    } else {
      const updateCart = cart.map((el) => {
        if (cartItem && el && el?.id === cartItem?.id) {
          axios.put(`http://localhost:4000/cart/${cartItem.id}`, updateItem);
          return updateItem;
        }

        return el;
      });
      setCart(updateCart);
    }
  }
  return (
    <div className="cart-list">
      <div className="cart-list__body">
        {cart.map((el) => (
          <CartItem
            key={el.id}
            plusQuantity={plusQuantity}
            minusQuantity={minusQuantity}
            removeItem={removeItem}
            cartItem={el}
          />
        ))}
      </div>
    </div>
  );
};

export default CartList;
