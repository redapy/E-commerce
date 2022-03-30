import { Component, createRef } from "react";
//Apollo and query
import { graphql } from "@apollo/client/react/hoc";
import { GET_CURRENCIES } from "../../utils/queries";
//redux
import { connect } from "react-redux";
import { compose } from "redux";
//styles
import {
  CurrencyList,
  DropdownMenu,
  ToggleButton,
} from "./CurrencySwitcher.styles";
//icons
import openArrow from "../../assests/openArrow.svg";
import closeArrow from "../../assests/closeArrow.svg";

class CurrencySwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.menuref = createRef();
  }

  //close and open the menu
  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };
  // close the menu if clicked outside of it
  handleClickOutsideMenu = (e) => {
    //check if we have th node ref (menu ref), if there is a ref check that is not the menu itself
    if (this.menuref && !this.menuref.current.contains(e.target)) {
      this.setState({
        isOpen: false,
      });
    }
  };
  //select a currency and dispatch an action to chnage the redux store state
  handleSelect = (symbol) => {
    this.props.selectCurrecny(symbol);
    //close the menu after
    this.toggle();
  };

  //detect a click on the document object
  componentDidMount() {
    document.addEventListener("click", this.handleClickOutsideMenu);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutsideMenu);
  }

  render() {
    const { loading, currencies } = this.props.data;
    const { isOpen } = this.state;
    const { currencySymbol } = this.props;
    return (
      <DropdownMenu ref={this.menuref} role="menu">
        <span>{currencySymbol}</span>
        <ToggleButton onClick={this.toggle}>
          {isOpen ? (
            <img src={closeArrow} alt="close button" />
          ) : (
            <img src={openArrow} alt="open button" />
          )}
        </ToggleButton>
        {isOpen && (
          <CurrencyList>
            {loading && <p>Loading...</p>}
            {currencies &&
              currencies.map((currency) => (
                <li
                  key={currency.symbol}
                  onClick={() => this.handleSelect(currency.symbol)}
                >
                  {currency.symbol} <span>{currency.label}</span>
                </li>
              ))}
          </CurrencyList>
        )}
      </DropdownMenu>
    );
  }
}

// connect the redux curreny state to this component props
const mapStateToProps = (state) => ({
  currencySymbol: state.currency.symbol,
});

// attach the selectCurrency function to props, which dispatch an action to change redux store
const mapDispatchToProps = (dispatch) => ({
  selectCurrecny: (symbol) => dispatch({ type: "SELECT_CUREENCY", symbol }),
});

export default compose(
  graphql(GET_CURRENCIES),
  connect(mapStateToProps, mapDispatchToProps)
)(CurrencySwitcher);
