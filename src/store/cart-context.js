import React from "react";

const CartContext = React.createContext({
  //we used some obejcts value inside 'create context' bcz it give some default value
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
