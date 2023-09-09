import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import "./App.scss";
import SneakersServer from "./API/SneakersServer.js";
import { useFetching } from "./hooks/useFetching";
import Sneakers from "./pages/Sneakers.jsx";
import Favorites from "./pages/Favorites.jsx";
import axios from "axios";
import { Transition } from "react-transition-group";
import { AppContext } from "./context/context.js";
import Cart from "./components/cart/Cart.jsx";
import Orders from "./pages/Orders.jsx";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [sneakers, setSneakers] = useState([]);

  const [cart, setCart] = useState([]);

  function addToFavorite(item, setFavotieFlag) {
    axios.post("http://localhost:5000/favorites", item);
    setFavorites([...favorites, item]);
    setFavotieFlag(true);
  }
  function removeFromFavorite(item, setFavotieFlag) {
    axios.delete(`http://localhost:5000/favorites/${item.id}`);
    setFavorites((prev) => prev.filter((el) => el.id !== item.id));
    setFavotieFlag(false);
  }
  function inCart(id, setFlagCart) {
    const itemInCart = cart.find((el) => el.id === id);
    if (itemInCart) {
      const updatedCart = cart.map((el) => {
        const updateItem = {
          ...el,
          quantity: el.quantity + 1,
        };
        if (el.id === id) {
          axios.put(`http://localhost:4000/cart/${el.id}`, updateItem);
          return updateItem;
        }
        return el;
      });
      setCart(updatedCart);
    } else {
      sneakers.forEach((el) => {
        if (el.id === id) {
          const cartItem = { ...el, quantity: 1 };
          setCart([...cart, cartItem]);
          axios.post(" http://localhost:4000/cart", cartItem);
        }
      });
    }
    setFlagCart(true);
    setTimeout(() => {
      setFlagCart(false);
    }, 2000);
  }
  const [fetchData, isLoading, error] = useFetching(async () => {
    try {
      const sneakersData = await SneakersServer.getSneakers();
      const responseFavorites = await axios.get(
        "http://localhost:5000/favorites",
      );
      const responseCart = await axios.get(" http://localhost:4000/cart");
      setCart(responseCart.data);
      setSneakers(sneakersData);
      setFavorites(responseFavorites.data);
    } catch (error) {
      alert("Произошла ошибка при загрузке данных");
    }
  });

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  return (
    <AppContext.Provider
      value={{
        favorites,
        sneakers,
        cart,
        addToFavorite,
        removeFromFavorite,
        inCart,
        setOpenCart,
        isLoading,
      }}
    >
      <div className="wrapper">
        <div className="container">
          <Header openCart={openCart} setOpenCart={setOpenCart} />
          <main className="main">
            <div className="main__container">
              <Routes>
                <Route path="/sneakers" element={<Sneakers />}></Route>
                <Route path="/favorites" element={<Favorites />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
                <Route path="*" element={<Navigate to="/sneakers" />}></Route>
              </Routes>
              <Transition
                mountOnEnter
                unmountOnExit
                timeout={500}
                in={openCart}
              >
                {(state) => (
                  <Cart
                    state={state}
                    setCart={setCart}
                    setOpenCart={setOpenCart}
                  />
                )}
              </Transition>
            </div>
          </main>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
