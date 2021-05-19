import { Route } from "react-router-dom";
import Products from "./pages/Products";

import  ProductDetail  from "./pages/ProductDetail";
import Welcome from "./pages/Welcome";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;
