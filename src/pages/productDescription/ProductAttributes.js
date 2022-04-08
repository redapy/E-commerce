import { Component } from "react";
import {
  Attribute,
  AttributeItems,
  AttributeName,
  Item,
} from "./ProductAttributes.styles";

class ProductAttributes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSelect = (event) => {
    this.setState(
      { [event.target.name]: event.target.value },
      //  add the setState second argument that will be exucted once the stete is updated
      // once the state is updated trigger the getAttributes function, which is passed as props from the parent component,
      // to updat the parent state
      () => {
        this.props.getAttributes(this.state);
      }
    );
  };

  render() {
    const { attributes } = this.props;

    return (
      <>
        {attributes.map(({ id: attrid, name, type, items }) => (
          <Attribute key={attrid}>
            <AttributeName>{name}:</AttributeName>
            <AttributeItems>
              {items.map(({ id: itemid, value }) => (
                <Item
                  key={itemid}
                  style={{ background: value }}
                  checked={this.state[name] === value}
                  swatch={type === "swatch"}
                >
                  {type === "swatch" ? "" : value}
                  <input
                    type="radio"
                    name={name}
                    value={value}
                    onChange={this.handleSelect}
                    required
                  />
                </Item>
              ))}
            </AttributeItems>
          </Attribute>
        ))}
      </>
    );
  }
}

export default ProductAttributes;
