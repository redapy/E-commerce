import { Component } from "react";
//styles
import { Arrow, Wrapper, Image } from "./Carousel.styles";
//icons
import leftArrow from "../../assests/left-arrow.svg";
import rightArrow from "../../assests/right-arrow.svg";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  moveRight = () => {
    const { images } = this.props;
    this.setState((prevState) => {
      if (prevState.index < images.length - 1) {
        return {
          index: prevState.index + 1,
        };
      }
    });
  };

  moveLeft = () => {
    this.setState((prevState) => {
      if (prevState.index > 0) {
        return {
          index: prevState.index - 1,
        };
      }
    });
  };

  render() {
    const { index } = this.state;
    const image = this.props.images[index];
    return (
      <Wrapper>
        <Arrow onClick={this.moveLeft}>
          <img src={leftArrow} alt="left arrow" />
        </Arrow>
        <Image>
          <img src={image} alt="product preview" />
        </Image>
        <Arrow onClick={this.moveRight}>
          <img src={rightArrow} alt="right arrow" />
        </Arrow>
      </Wrapper>
    );
  }
}

export default Carousel;
