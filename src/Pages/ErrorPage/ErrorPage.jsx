import "./ErrorPage.scss";
import sadSmile from '../../assets/img/sad.png'
function ErrorPage({ errorCode, errorMessage }) {
  return (
    <section className="error-page">
      <h1 className="error-page__title">{errorCode}</h1>
      <p className="error-page__message">{errorMessage}</p>
      <img src={sadSmile} alt="Sad smile image" />
    </section>
  );
}

export default ErrorPage;
