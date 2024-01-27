import React from "react";
export const Item = ({ item, price }) => {
    return (
      <div>
        <p>Item: {item}</p>
        <p>Price: ${price}</p>
      </div>
    );
  };