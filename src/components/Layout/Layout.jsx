import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import cartImg from "../../assets/cart.png";
import cartFull from "../../assets/cart-full.png";
import favoriteImg from "../../assets/favorite.png";
import favoriteLiked from "../../assets/favorite-liked.png";
import Container from "../Container/Container";
import "./Layout.scss";

const Layout = () => {
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const storedFavorite = JSON.parse(localStorage.getItem("favorite") || "[]");
    setCart(storedCart);
    setFavorite(storedFavorite);
  }, []);

  const year = new Date().getFullYear();

  return (
    <>
      <header className="header">
        <Container subClass="header__container">
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__list-item">
                <Link className="header__list-link" to="/">
                  Home
                </Link>
              </li>
              <li className="header__list-item">
                <Link className="header__list-link" to="/favorite">
                  Favorite
                </Link>
              </li>
              <li className="header__list-item">
                <Link className="header__list-link" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="user-nav">
            <ul className="user-nav__list">
              <li className="user-nav__item">
                <Link
                  to="/favorite"
                  className={`user-nav__link ${favorite.length > 0 ? "user-nav__link--favorite" : ""}`}
                  data-favorite-count={favorite.length}
                >
                  <img
                    className="user-nav__img user-nav__img--favorites"
                    src={favorite.length > 0 ? favoriteLiked : favoriteImg}
                    alt="Favorites"
                    width="30px"
                    height="30px"
                  />
                </Link>
              </li>
              <li className="user-nav__item">
                <Link
                  to="/cart"
                  className={`user-nav__link ${cart.length > 0 ? "user-nav__link--cart" : ""}`}
                  data-cart-count={cart.length}
                >
                  <img
                    className="user-nav__img user-nav__img--cart"
                    src={cart.length > 0 ? cartFull : cartImg}
                    alt="Cart"
                    width="30px"
                    height="30px"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </header>

      <main className="main">
        <Outlet context={{ setCart, setFavorite }} />
      </main>

      <footer className="footer">
        <p className="footer__text">{year} Yuri Quill &copy;  All rights reserved</p>
      </footer>
    </>
  );
};

export default Layout;
