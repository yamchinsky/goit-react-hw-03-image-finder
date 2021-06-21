import React from "react";
import PropTypes from "prop-types";
import { ErrorStyled } from "./ErrorStyled";

const Error = ({ children }) => {
  return (
    <ErrorStyled>
      <span className="error__text">{children}</span>
    </ErrorStyled>
  );
};
Error.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Error;
