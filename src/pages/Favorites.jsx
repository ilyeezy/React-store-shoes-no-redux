/* eslint-disable react/prop-types */

import MyTitle from "../components/UI/myTitle/MyTitle";

import Card_list from "../components/card-list/Card_list";
import { useContext } from "react";
import { AppContext } from "../context/context";
import CartInfo from "../components/UI/cartInfo/CartInfo";

const Favorites = () => {
  const { favorites, setOpenCart, removeFromFavorite, isLoading, inCart } =
    useContext(AppContext);
  return (
    <div className="favorites">
      <div style={{ marginBottom: "40px" }} className="favorites__top">
        <MyTitle>Мои закладки</MyTitle>
      </div>
      <div className="list-sneakers">
        {favorites && favorites.length > 0 ? (
          <div className="list-sneakers__body">
            <Card_list
              inCart={inCart}
              favorited={true}
              yourArray={favorites}
              removeFromFavorite={removeFromFavorite}
              isLoading={isLoading}
            ></Card_list>
          </div>
        ) : (
          !isLoading && (
            <CartInfo
              onClick={() => setOpenCart(false)}
              title="Закладок нет :("
              description="Вы ничего не добавляли в закладки"
            />
          )
        )}
      </div>
    </div>
  );
};

export default Favorites;
