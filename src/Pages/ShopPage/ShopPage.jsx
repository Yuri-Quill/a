import "./ShopPage.scss";
import UList from "../../components/UList/UList";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import Container from "../../components/Container/Container";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function ShopPage({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const { setCart, setFavorite } = useOutletContext();

  useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem("favorite")) || [];
    setFavorites(favorite);
  }, []);

  function toggleFavorite(product) {
    let updatedFavorites = [...favorites];
    if (favorites.includes(product.id)) {
      updatedFavorites = updatedFavorites.filter((favId) => favId !== product.id);
    } else {
      updatedFavorites.push(product.id);
    }
    setFavorites(updatedFavorites);
    setFavorite(updatedFavorites);
    localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
  }

  function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.includes(product.id)) {
      cart.push(product.id);
      setCart(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    setIsModalOpen(null);
    document.body.style.overflow = "auto";
  }

  function openModal(product) {
    if (!isModalOpen) {
      setIsModalOpen(true);
      setSelectedProduct(product);
      document.body.style.overflow = "hidden";
    } else {
      setIsModalOpen(false);
      setSelectedProduct(null);
      document.body.style.overflow = "auto";
    }
  }

  return (
    <Container>
      <UList className="product__list">
        {data.map((item, index) => (
          <ProductCard
            className="product__card"
            key={index}
            id={item.id}
            data={item}
            priceColor={true}
            isFavorite={favorites.includes(item.id)}
            toggleFavorite={() => toggleFavorite(item)}
            addToCart={() => openModal(item)}
            btnText={"Add to Cart"}
          />
        ))}
      </UList>
      {isModalOpen && (
        <ModalWindow
          onClick={openModal}
          data={selectedProduct}
          onClose={openModal}
          firstText={"Add to Cart"}
          firstClick={() => addToCart(selectedProduct)}
        />
      )}
    </Container>
  );
}

export default ShopPage;
