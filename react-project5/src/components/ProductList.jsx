import ProductCard from "./ProductCard";

function ProductList() {

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2499,
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 1299,
    },
    {
      id: 4,
      name: "Wireless Mouse",
      price: 799,
    }
  ];

  return (
    <section className="products">

      <h2>Products</h2>

      <div className="product-grid">

        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default ProductList;