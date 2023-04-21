import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const cartcntx = useContext(CartContext);
  console.log("rerender", cartcntx);

  const addItemToCart = (event) => {
    event.preventDefault();
    //update the context.items
    //cartcntx.items.push(props.item)
    const quantity = document.getElementById("amount" + props.id).value;
    cartcntx.addItem({ ...props.item, quantity: quantity });

    console.log("aFTER addtocart", cartcntx);
  };

  return (
    <form className={classes.form}>
      {console.log("inside render", cartcntx.items)}
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
