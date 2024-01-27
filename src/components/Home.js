import React from "react";
import { Item } from "./Item";
export const Home = ({ store, shouldDiscount }) => {
    return (
      <div>
        <h2>Home Page</h2>
        {store.map((item, index) => (
          <Item
            key={index}
            item={item.item}
            price={shouldDiscount ? item.price * (1 - item.discount) : item.price}
          />
        ))}
      </div>
    );
  };
  