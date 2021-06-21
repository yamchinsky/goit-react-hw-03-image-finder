import React from "react";
import { ImageGalleryItemStyled } from "./ImageGalleryItemStyled";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ data, onClick }) => {
  return (
    <ImageGalleryItemStyled
      onClick={() => onClick(data.id)}
      role="presentation"
    >
      <img
        src={data.imageURL}
        alt={data.tags}
        className="ImageGalleryItem-image"
      />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  data: PropTypes.shape({
    imageURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
