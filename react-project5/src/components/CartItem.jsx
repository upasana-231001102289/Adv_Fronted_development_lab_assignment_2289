import { useCart } from "../Context/CartContext";

function CartItem({ item }) {

  const { dispatch } = useCart();

  return (
    <div className="cart-item">

      <div>
        <h3>{item.name}</h3>

        <p>
          ₹{item.price} × {item.quantity}
        </p>
      </div>

      <div className="quantity">

        <button
          onClick={() =>
            dispatch({
              type: "DECREASE_QUANTITY",
              id: item.id
            })
          }
        >
          −
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() =>
            dispatch({
              type: "INCREASE_QUANTITY",
              id: item.id
            })
          }
        >
          +
        </button>

      </div>

      <button
        className="remove"
        onClick={() =>
          dispatch({
            type: "REMOVE_FROM_CART",
            id: item.id
          })
        }
      >
        Remove
      </button>

    </div>
  );
}

export default CartItem;