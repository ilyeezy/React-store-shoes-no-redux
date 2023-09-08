import React, { Fragment, useContext, useEffect, useState } from "react";
import Card_list from "../components/card-list/Card_list";
import { AppContext } from "../context/context";
import axios from "axios";
import MyTitle from "../components/UI/myTitle/MyTitle";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  async function getOrders() {
    const resp = await axios.get(" http://localhost:4400/orders");
    const items = resp.data.map((obj) => obj.cart);
    setOrders(items);
    return items;
  }
  const { addToFavorite, removeFromFavorite } = useContext(AppContext);

  useEffect(() => {
    getOrders();
  }, []);
  return (
    <>
      <MyTitle style={{ marginBottom: "40px" }}>Мои заказы</MyTitle>
      {orders.map((el, i) => (
        <Fragment key={i}>
          <MyTitle style={{ margin: "20px 0px" }}>{`Заказ #${i + 1} `}</MyTitle>
          <Card_list
            removeFromFavorite={removeFromFavorite}
            addToFavorite={addToFavorite}
            yourArray={el}
          />
        </Fragment>
      ))}
    </>
  );
};

export default Orders;
