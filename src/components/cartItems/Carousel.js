import { Component } from "react";
//styles
import { Arrow, Wrapper, Image } from "./Carousel.styles";
//icons
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";

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
    const { images, overlay } = this.props;
    const image = images[index];
    console.log(images.length);
    return (
      <Wrapper>
        {!overlay && images.length > 1 && (
          <Arrow onClick={this.moveLeft} left>
            <img src={leftArrow} alt="left arrow" />
          </Arrow>
        )}
        <Image src={image} alt="product preview" overlay={overlay} />
        {!overlay && images.length > 1 && (
          <Arrow onClick={this.moveRight} right>
            <img src={rightArrow} alt="right arrow" />
          </Arrow>
        )}
      </Wrapper>
    );
  }
}

export default Carousel;
