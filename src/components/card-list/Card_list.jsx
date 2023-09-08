/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import "./CardList.scss";

import Card_item from "./card-item/Card_item";
import MyLoader from "../UI/myLoader/MyLoader";
import { AppContext } from "../../context/context";

const Card_list = ({
  yourArray,
  addToFavorite,
  inCart,
  removeFromFavorite,

  favorited = false,
  isLoading,
}) => {
  console.log("render card_list");
  //Убрать рендер компонента при добавлении в корзину и удаления из корзины
  return (
    <div className="list-sneakers">
      <div className="list-sneakers__body">
        {isLoading
          ? Array(12)
              .fill()
              .map((_, i) => <MyLoader key={i} />)
          : yourArray &&
            yourArray.map((el) => (
              <Card_item
                favorited={favorited}
                addToFavorite={addToFavorite}
                inCart={inCart}
                item={el}
                key={el.id}
                removeFromFavorite={removeFromFavorite}
              />
            ))}
      </div>
    </div>
  );
};

export default Card_list;
