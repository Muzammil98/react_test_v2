import React from "react";
import Item from "./Item";

export default function List(props) {
  return (
    <div className="border border-info">
      {props.items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}
