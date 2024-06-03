import "./ModalHeader.scss";
import PropTypes from "prop-types";

function ModalHeader({ children }) {
  return (
    <>
      <header className="modal__header">{children}</header>
    </>
  );
}

ModalHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalHeader;
