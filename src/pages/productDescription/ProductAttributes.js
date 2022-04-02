import { Component } from "react";
import {
  Attribute,
  AttributeItems,
  AttributeName,
  Item,
  Square,
} from "./ProductAttributes.styles";

class ProductAttributes extends Component {
  render() {
    const { attributes } = this.props;
    return (
      <>
        {attributes.map(({ id, name, type, items }) => (
          <Attribute key={id}>
            <AttributeName>{name}:</AttributeName>
            <AttributeItems>
              {items.map(({ id, value }) => (
                <Item key={id} color={value}>
                  {type === "swatch" ? "" : value}
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
