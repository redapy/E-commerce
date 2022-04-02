import { Component } from "react";
//styles
import { MainImage, Thumbnails, Wrapper } from "./Gallery.styles";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.gallery[0],
    };
  }

  changeImage = (src) => {
    this.setState({
      image: src,
    });
  };
  render() {
    const { gallery, alt } = this.props;
    const { image } = this.state;
    return (
      <Wrapper>
        <Thumbnails>
          {gallery.map((imageSrc) => (
            <button key={imageSrc} onClick={() => this.changeImage(imageSrc)}>
              <img src={imageSrc} alt={alt} />
            </button>
          ))}
        </Thumbnails>
        <MainImage>
          <img src={image} alt={alt} />
        </MainImage>
      </Wrapper>
    );
  }
}

export default Gallery;
