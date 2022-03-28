import { Component } from "react";
// react router
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartPage from "./pages/cartPage/CartPage";
//components
import Navbar from "./components/navbar/Navbar";
import CategoryPage from "./pages/poductsPage/CategoryPage";
import ProductDescription from "./pages/productDescription/ProductDescription";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/categories/:title">
              <CategoryPage />
            </Route>
            <Route path="/product/:id">
              <ProductDescription />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
