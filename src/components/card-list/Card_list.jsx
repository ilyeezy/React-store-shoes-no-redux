/* eslint-disable react/prop-types */

import "./CardList.scss";

import Card_item from "./card-item/Card_item";
import MyLoader from "../UI/myLoader/MyLoader";
import { memo } from "react";

const Card_list = memo(function Card_list({
  yourArray,
  addToFavorite,
  inCart,
  removeFromFavorite,
  favorited = false,
  isLoading,
}) {
  return (
    <div className="list-sneakers">
      <div className="list-sneakers__body">
        {isLoading
          ? Array(10)
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
});

export default Card_list;
