import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
  coupon: 0
};

function cartReducer(state, action) {
  switch (action.type) {

    case "ADD_TO_CART": {
      const existingProduct = state.cart.find(
        item => item.id === action.product.id
      );

      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.product,
            quantity: 1
          }
        ]
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          item => item.id !== action.id
        )
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0)
      };

    case "APPLY_COUPON":
      return {
        ...state,
        coupon: action.discount
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {

  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}