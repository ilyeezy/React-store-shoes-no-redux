import React, { Fragment, useContext, useEffect, useState } from "react";
import Card_list from "../components/card-list/Card_list";
import { AppContext } from "../context/context";
import axios from "axios";
import MyTitle from "../components/UI/myTitle/MyTitle";
import CartInfo from "../components/UI/cartInfo/CartInfo";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  let navigate = useNavigate();
  const { addToFavorite, removeFromFavorite, isLoading } =
    useContext(AppContext);

  async function getOrders() {
    const resp = await axios.get(" http://localhost:4400/orders");
    const items = resp.data.map((obj) => obj.cart);
    setOrders(items);
    return items;
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <MyTitle style={{ marginBottom: "40px" }}>Мои заказы</MyTitle>
      {orders && orders.length > 0
        ? orders.map((el, i) => (
            <Fragment key={i}>
              <MyTitle style={{ margin: "20px 0px" }}>{`Заказ #${
                i + 1
              } `}</MyTitle>

              <Card_list
                isLoading={isLoading}
                removeFromFavorite={removeFromFavorite}
                addToFavorite={addToFavorite}
                yourArray={el}
              />
            </Fragment>
          ))
        : !isLoading && (
            <CartInfo
              onClick={() => navigate("/sneakers")}
              description="Оформите хотя бы один заказ."
              title="У вас нет заказов"
            ></CartInfo>
          )}
    </>
  );
};

export default Orders;
