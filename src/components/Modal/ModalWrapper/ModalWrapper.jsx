import PropTypes from "prop-types";
import "./ModalWrapper.scss";
function ModalWrapper({ children, onClick }) {
  function handleClick(e) {
    if (e.target === e.currentTarget) {
      onClick();
    }
  }
  return (
    <div className="modal__wrapper" onClick={handleClick}>
      {children}
    </div>
  );
}
ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default ModalWrapper;
