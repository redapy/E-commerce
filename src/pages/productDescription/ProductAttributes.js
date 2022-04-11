import { Component } from "react";
import {
  Attribute,
  AttributeItems,
  AttributeName,
  Item,
} from "./ProductAttributes.styles";

class ProductAttributes extends Component {
  render() {
    const { attributes, getAttributes, selectedAttributes } = this.props;
    // set the parent state to the selected attributes
    const handleSelect = (event) => {
      getAttributes({ [event.target.name]: event.target.value });
    };
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
                  checked={selectedAttributes[name] === value}
                  swatch={type === "swatch"}
                >
                  {type === "swatch" ? "" : value}
                  <input
                    type="radio"
                    name={name}
                    value={value}
                    onChange={handleSelect}
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
