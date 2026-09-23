import { useCart } from "../Context/CartContext";

function ProductCard({ product }) {

  const { dispatch } = useCart();

  const addToCart = () => {

    dispatch({
      type: "ADD_TO_CART",
      product: product
    });

  };

  return (
    <div className="product-card">


      <h3>{product.name}</h3>

      <p className="price">
        ₹{product.price}
      </p>

      <button onClick={addToCart}>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;