import React from "react";
import PropTypes from "prop-types";
import "./ModalBody.scss";

const ModalBody = ({ children }) => <div className="modal__body">{children}</div>;

ModalBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalBody;
