import React, { Component } from "react";
import Searchbar from "./searchbar/Searchbar";
import Button from "./button/Button";
import ImageGallery from "./imagegallery/ImageGallery";
import Modal from "./modal/Modal";
import * as api from "./services/api";
import Loader from "./loader/Loader";
import Error from "./Error/Error";

class App extends Component {
  state = {
    images: [],
    searchData: "",
    page: 1,
    isLoading: false,
    showModal: false,
    imageId: null,
    error: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchData, page } = this.state;
    if (prevState.searchData !== searchData || prevState.page !== page) {
      this.getDataApi(searchData, page);
    }
  }

  getDataApi = (text, page) => {
    console.log(text);
    let scrollHeight = 0;
    if (page === 1) {
      scrollHeight = 0;
    } else {
      scrollHeight = document.documentElement.scrollHeight - 144;
    }
    this.setState({ isLoading: true });
    api
      .get(text, page)
      .then(({ data }) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data.hits],
        }));
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        const { images } = this.state;
        if (images.length < 1) {
          this.setState({ error: true });
        } else {
          this.setState({ error: false });
        }
        this.setState({ isLoading: false });
        window.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        });
      });
  };

  formSubmitHandler = (text) => {
    this.setState({ searchData: text, images: [], page: 1 });
  };

  oneMorePageOnClick = () => {
    const { page } = this.state;

    this.setState({
      page: page + 1,
    });
  };

  handleClickIsOpenModal = (id) => {
    this.setState({
      showModal: true,
      imageId: id,
    });
  };

  handleClickIsCloseModal = (e) => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { images, isLoading, showModal, imageId, error } = this.state;
    const arrMap = (arr) => {
      return arr.map((e) => ({
        imageURL: e.webformatURL,
        ...e,
      }));
    };
    const foundImg = (arr, id) => {
      return arr.find((e) => e.id === id);
    };
    const imgModal = foundImg(images, imageId);
    return (
      <>
        {showModal && (
          <Modal closeModal={this.handleClickIsCloseModal}>
            <img src={imgModal.largeImageURL} alt={imgModal.tags} />
          </Modal>
        )}

        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery
          images={images}
          data={arrMap(images)}
          openModal={this.handleClickIsOpenModal}
        >
          {/* <ImageGalleryItem /> */}
        </ImageGallery>

        {error && <Error>Image not found!</Error>}
        {isLoading && <Loader />}
        {images.length > 0 && (
          <Button oneMorePageOnClick={this.oneMorePageOnClick} />
        )}
      </>
    );
  }
}

export default App;
