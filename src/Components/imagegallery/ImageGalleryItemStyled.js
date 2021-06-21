import styled from "styled-components";

export const ImageGalleryItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc((100% - 4 * 20px) / 4);
  border-radius: 8px;
  background-color: rgb(215, 218, 9);
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  :not(:nth-child(4n)) {
    margin-right: 20px;
  }

  .ImageGalleryItem-image {
    width: 100%;
    height: 190px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .ImageGalleryItem-image:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

// const StyledGalleryItem = styled(ImageGalleryItemStyled)``;
