import { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGallery.styled';

class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL, user } = this.props.card;
    return (
      <GalleryItem
        onClick={() => this.props.handleItemClick({ largeImageURL, user })}
      >
        <GalleryItemImage src={webformatURL} alt="" />
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;
