import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  //3
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  //2
  if (action.type === "ADD") {
    const updatedTOtalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemsIndex];
    let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemsIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTOtalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemsIndex];
    const updatedTOtalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemsIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTOtalAmount,
    };
  }
  return defaultCartState;
};

//the goal of this component is to manage the CartContext data & provide that context to all components to access to it
const CartProvider = (props) => {
  const [cartState, dispatchcartAction] = useReducer(
    cartReducer,
    defaultCartState
  ); //1

  const addItemHandler = (item) => {
    dispatchcartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchcartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
