import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import { ImageGalleryStyled } from "./ImageGalleryStyled";
import PropTypes from "prop-types";

const ImageGallery = ({ data, openModal }) => {
  return (
    <>
      {data.length > 0 && (
        <ImageGalleryStyled>
          {data.map((image) => (
            <ImageGalleryItem data={image} onClick={openModal} key={image.id} />
          ))}
          ;
        </ImageGalleryStyled>
      )}
    </>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }).isRequired
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
