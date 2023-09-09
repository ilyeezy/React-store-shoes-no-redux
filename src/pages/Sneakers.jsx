/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useMemo, useState } from "react";

import Card_list from "../components/card-list/Card_list";
import axios from "axios";
import MyTitle from "../components/UI/myTitle/MyTitle";

import { AppContext } from "../context/context";

const Sneakers = () => {
  const { sneakers, addToFavorite, removeFromFavorite, inCart, isLoading } =
    useContext(AppContext);

  const [search, setSearch] = useState("");
  const filteredProducts = useMemo(() => {
    return sneakers.filter((el) =>
      el.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, sneakers]);

  return (
    <div className="main__body">
      <div className="main__top">
        <MyTitle>
          {search ? `Поиск по запросу ${search}` : "Все кроссовки"}
        </MyTitle>
        <div className="main__search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
              stroke="#E4E4E4"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Поиск . . ."
          />
          {search && (
            <span
              className="material-symbols-outlined"
              onClick={() => setSearch("")}
            >
              clear_all
            </span>
          )}
        </div>
      </div>

      <Card_list
        isLoading={isLoading}
        removeFromFavorite={removeFromFavorite}
        addToFavorite={addToFavorite}
        inCart={inCart}
        yourArray={filteredProducts}
      />
    </div>
  );
};

export default Sneakers;
