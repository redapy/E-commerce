import { Component } from "react";
//styles
import { MainImage, Thumbnails, Wrapper } from "./Gallery.styles";

class Gallery extends Component {
  render() {
    const { gallery, alt } = this.props;
    return (
      <Wrapper>
        <Thumbnails>
          {gallery.map((imageSrc) => (
            <button key={imageSrc}>
              <img src={imageSrc} alt={alt} />
            </button>
          ))}
        </Thumbnails>
        <MainImage>
          <img src={gallery[0]} alt={alt} />
        </MainImage>
      </Wrapper>
    );
  }
}

export default Gallery;
