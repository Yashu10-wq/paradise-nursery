import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>

        <Link to="/plants">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => {
        const itemTotal =
          item.price * item.quantity;

        return (
          <div
            className="cart-item"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.name}
            />

            <div className="cart-details">
              <h3>{item.name}</h3>

              <p>
                Unit Price: ${item.price}
              </p>

              <p>
                Total: ${itemTotal}
              </p>

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity:
                          item.quantity - 1,
                      })
                    )
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity:
                          item.quantity + 1,
                      })
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>

            <button
              className="delete-btn"
              onClick={() =>
                dispatch(removeItem(item.id))
              }
            >
              Delete
            </button>
          </div>
        );
      })}

      <div className="cart-summary">
        <h2>
          Total Amount: ${totalAmount}
        </h2>

        <button
          className="checkout-btn"
          onClick={() =>
            alert("Checkout Coming Soon!")
          }
        >
          Checkout
        </button>

        <Link to="/plants">
          <button className="continue-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartItem;