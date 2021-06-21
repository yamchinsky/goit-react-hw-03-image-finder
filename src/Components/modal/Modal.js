import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import { ModalStyled } from "./ModalStyled";

class Modal extends Component {
  overlayRef = createRef();

  static propTypes = {
    children: PropTypes.node.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPressESC);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPressESC);
  }

  handleKeyPressESC = (e) => {
    if (e.keyCode === 27) {
      this.props.closeModal();
    }
  };

  // handleBackdropClick = (e) => {
  //   if (e.currentTarget !== "IMG") {
  //     this.props.closeModal();
  //   }
  // };

  render() {
    const { children } = this.props;
    return (
      <ModalStyled>
        <div
          className="Overlay"
          node={this.overlayRef}
          onClick={this.handleBackdropClick}
          role="presentation"
        >
          <div className="Modal">{children}</div>
        </div>
      </ModalStyled>
    );
  }
}

export default Modal;
