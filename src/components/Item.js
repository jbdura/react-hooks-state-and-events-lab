import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function addItem() {
    setInCart((inCart) => !inCart);
  }

  return (

  //   <li className={inCart ? "in-cart" : ""}>
  //     <span>{name}</span>
  //     <span className="category">{category}</span>
  //     <button className={inCart ? "remove" : "add"} 
  //     onClick={addItem}
  //     >
  //       {inCart ? "Remove From" : "Add to "}</button>
  //   </li>
  // );

    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItem}>
          {inCart ? "Remove" : "Add"}
      </button>
  </li>
  );
}

export default Item;
