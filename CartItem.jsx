import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

/*
  Helper function to calculate the total cart amount.
  This improves readability, modularity, and maintainability.
*/
const calculateTotalAmount = (items) => {
  return items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

const CartItem = () => {
  const dispatch = useDispatch();

  // Select cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Dynamically calculate total amount on every render
  const totalAmount = calculateTotalAmount(cartItems);

  return (
    <>
      {/* Navigation Bar */}
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            {/* Product details */}
            <h4>{item.name}</h4>
            <p>Unit Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>

            {/* Total cost per item */}
            <p>
              Item Total: ${item.price * item.quantity}
            </p>

            {/* Quantity controls */}
            <button onClick={() => dispatch(increaseQty(item.id))}>
              +
            </button>
            <button
              onClick={() => dispatch(decreaseQty(item.id))}
              disabled={item.quantity === 1}
            >
              -
            </button>

            {/* Remove item from cart */}
            <button onClick={() => dispatch(removeItem(item.id))}>
              Delete
            </button>
          </div>
        ))
      )}

      {/* Overall cart total */}
      <h3>Total Cart Amount: ${totalAmount}</h3>

      {/* Action buttons */}
      <button onClick={() => alert("Checkout Coming Soon")}>
        Checkout
      </button>

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </>
  );
};

export default CartItem;
