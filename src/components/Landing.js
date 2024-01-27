import React from "react";
export const Landing = ({ user, hottestItem }) => {
    return (
      <div>
        <p>Welcome, {user}!</p>
        {hottestItem && <p>Hottest Item: {hottestItem.item}</p>}
      </div>
    );
  };
  