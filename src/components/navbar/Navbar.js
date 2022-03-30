import { Component } from "react";
import { Link } from "react-router-dom";
import CurrencySwitcher from "../currencySwitcher/CurrencySwitcher";
import { Nav, NavLinks, Wrapper } from "./Navbar.styles";

class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <Nav>
          <NavLinks>
            <li>
              <Link to="/categories/all">all</Link>
            </li>
            <li>
              <Link to="/categories/clothes">clothes</Link>
            </li>
            <li>
              <Link to="/categories/tech">tech</Link>
            </li>
          </NavLinks>
          <CurrencySwitcher />
        </Nav>
      </Wrapper>
    );
  }
}

export default Navbar;
