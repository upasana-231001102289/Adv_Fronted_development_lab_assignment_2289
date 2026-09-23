import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import { CartProvider } from "./Context/CartContext";

import "./App.css";

function App() {
  return (
    <CartProvider>

      <Header />

      <main>

        <ProductList />

        <Cart />

      </main>

      <Footer />

    </CartProvider>
  );
}

export default App;