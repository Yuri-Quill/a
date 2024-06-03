import React from "react";
import PropTypes from "prop-types";
import "./Modal.scss";

const Modal = ({ children }) => <article className="modal__window">{children}</article>;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
