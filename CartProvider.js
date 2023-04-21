import { useState } from "react";
import CartContext from "./cart-context";

//the goal of this component is to manage the CartContext data & provide that context to all components to access to it

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemHandler = (item) => {
    updateItems([...items, item]);
    //cartContext.items.push(item)
    console.log("inside addItemCartHandler", cartContext);
  };

  const removeItemHandler = (id) => {};

  const cartContext = {
    items: items,

    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log("inside CartContext.Provider", cartContext)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
