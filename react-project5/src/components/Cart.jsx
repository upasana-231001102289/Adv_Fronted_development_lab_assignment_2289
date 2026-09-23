import { useState } from "react";
import { useCart } from "../Context/CartContext";
import CartItem from "./CartItem";

function Cart() {

  const { state, dispatch } = useCart();

  const [couponCode, setCouponCode] = useState("");

  const subtotal = state.cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const discount = subtotal * state.coupon / 100;

  const afterDiscount = subtotal - discount;

  const gst = afterDiscount * 0.18;

  const grandTotal = afterDiscount + gst;

  const applyCoupon = () => {

    const code = couponCode.toUpperCase();

    if (code === "SAVE10") {

      dispatch({
        type: "APPLY_COUPON",
        discount: 10
      });

      alert("10% coupon applied!");

    } else if (code === "SAVE20") {

      dispatch({
        type: "APPLY_COUPON",
        discount: 20
      });

      alert("20% coupon applied!");

    } else {

      dispatch({
        type: "APPLY_COUPON",
        discount: 0
      });

      alert("Invalid coupon code");

    }
  };

  return (
    <section className="cart">

      <h2>Shopping Cart</h2>

      {state.cart.length === 0 ? (

        <p className="empty-cart">
          Your cart is empty.
        </p>

      ) : (

        <>
          <div className="cart-items">

            {state.cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}

          </div>

          <div className="summary">

            <h3>Order Summary</h3>

            <p>
              Subtotal:
              <span>₹{subtotal.toFixed(2)}</span>
            </p>

            <p>
              Discount ({state.coupon}%):
              <span>
                - ₹{discount.toFixed(2)}
              </span>
            </p>

            <p>
              GST (18%):
              <span>
                ₹{gst.toFixed(2)}
              </span>
            </p>

            <hr />

            <h3 className="grand-total">
              Grand Total:
              <span>
                ₹{grandTotal.toFixed(2)}
              </span>
            </h3>

            <div className="coupon">

              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) =>
                  setCouponCode(e.target.value)
                }
              />

              <button onClick={applyCoupon}>
                Apply Coupon
              </button>

            </div>

            <p className="coupon-info">
              Try: SAVE10 or SAVE20
            </p>

          </div>
        </>

      )}

    </section>
  );
}

export default Cart;