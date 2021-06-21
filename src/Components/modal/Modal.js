import React, { Component, createNode } from "react";
import { ModalStyled } from "./ModalStyled";

class Modal extends Component {
  overlay = createNode();
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

  handleBackdropClick = (e) => {
    const { current } = this.overlayNode;
    if (e.target === current) {
      this.props.closeModal();
    }
  };
  state = {};
  render() {
    const { children } = this.props;
    return (
      <ModalStyled>
        <div
          className="Overlay"
          node={this.overlayNode}
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
