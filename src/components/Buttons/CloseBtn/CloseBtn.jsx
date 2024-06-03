import "./CloseBtn.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";

function CloseBtn({ onClose }) {
  return (
    <Button className="close-btn" onClick={onClose}>
      +
    </Button>
  );
}

CloseBtn.propTypes = {
  onClose: PropTypes.func,
};

export default CloseBtn;
