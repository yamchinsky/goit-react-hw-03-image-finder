import React from "react";
import PropTypes from "prop-types";
import { ButtonStyledContainer } from "./ButtonStyled";

const Button = ({ oneMorePageOnClick }) => {
  return (
    <ButtonStyledContainer>
      <button type="button" className="btn" onClick={oneMorePageOnClick}>
        <span className="load-more">Load more</span>
      </button>
    </ButtonStyledContainer>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
