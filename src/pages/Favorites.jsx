/* eslint-disable react/prop-types */

import MyTitle from "../components/UI/myTitle/MyTitle";
import axios from "axios";

import Card_list from "../components/card-list/Card_list";
import { useContext } from "react";
import { AppContext } from "../context/context";

const Favorites = () => {
  const { favorites, removeFromFavorite, inCart } = useContext(AppContext);

  return (
    <div className="favorites">
      <div style={{ marginBottom: "40px" }} className="favorites__top">
        <MyTitle>Мои закладки</MyTitle>
      </div>
      <div className="list-sneakers">
        <div className="list-sneakers__body">
          <Card_list
            inCart={inCart}
            favorited={true}
            yourArray={favorites}
            removeFromFavorite={removeFromFavorite}
          ></Card_list>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
