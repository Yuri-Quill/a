import PropTypes from "prop-types";

function Button({ children, className, type = "button", onClick }) {
  return (
    <button className={`${className} ? ${className} : btn`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button","submit"]),
  onClick: PropTypes.func,
};

export default Button;