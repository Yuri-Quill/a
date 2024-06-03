import './Container.scss'

function Container({ children, subClass }) {
  return <div className={`container ${subClass || ""}`}>{children}</div>;
}

export default Container;
