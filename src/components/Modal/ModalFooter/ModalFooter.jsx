import PropTypes from "prop-types";
import Button from "../../Buttons/Button/Button";
import "./ModalFooter.scss";

const ModalFooter = ({ firstText, secondaryText, firstClick, secondaryClick }) => (
  <div className={`modal__footer-wrapper ${secondaryText ? "" : "modal__footer-wrapper--center"}`}>
    {firstText && (
      <Button className="modal-footer__button" onClick={firstClick}>
        {firstText}
      </Button>
    )}
    {secondaryText && (
      <Button
        className="modal-footer__button modal-footer__button--second"
        onClick={secondaryClick} 
      >
        {secondaryText}
      </Button>
    )}
  </div>
);

ModalFooter.propTypes = {
  firstText: PropTypes.string,
  secondaryText: PropTypes.string,
  firstClick: PropTypes.func,
  secondaryClick: PropTypes.func,
};

export default ModalFooter;
