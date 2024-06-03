import "./FavoritePage.scss";
import { useState } from "react";
import UList from "../../components/UList/UList";
import Container from "../../components/Container/Container";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { useOutletContext } from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

const FavoritePage = ({ data }) => {
  const { setCart, setFavorite } = useOutletContext();
  const storedFavorite = JSON.parse(localStorage.getItem("favorite")) || [];
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalInfo, setModalInfo] = useState({ open: false, type: "" });

  const toggleModal = (product, type) => {
    setSelectedProduct(product);
    setModalInfo({
      open: true,
      type,
    });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalInfo({ open: false, type: "" });
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };

  const addToCart = (product) => {
    if (!storedCart.includes(product.id)) {
      const updatedCart = [...storedCart, product.id];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    closeModal();
  };

  const inCart = () => {
    alert("Product already in cart");
  };

  const deleteFromFavorites = (product) => {
    const updatedFavorite = storedFavorite.filter((id) => id !== product.id);
    setFavorite(updatedFavorite);
    localStorage.setItem("favorite", JSON.stringify(updatedFavorite));
    closeModal();
  };

  if (storedFavorite.length === 0) {
    return <ErrorPage errorMessage="You don't have any favorite products" />;
  }

  return (
    <Container>
      <UList className="favorite__list">
        {data
          .filter((item) => storedFavorite.includes(item.id))
          .map((item) => (
            <ProductCard
              className="favorite__card"
              key={item.id}
              data={item}
              isInCart={storedCart.includes(item.id)}
              addToCart={
                storedCart.includes(item.id)
                  ? inCart
                  : () => toggleModal(item, "addToCart")
              }
              onClose={() => toggleModal(item, "deleteConfirmation")}
              btnText={storedCart.includes(item.id) ? "In Cart" : "Add to Cart"}
            />
          ))}
      </UList>
      {modalInfo.open && modalInfo.type === "addToCart" && (
        <ModalWindow
          onClick={closeModal}
          data={selectedProduct}
          onClose={closeModal}
          firstText="Add to Cart"
          firstClick={() => addToCart(selectedProduct)}
        />
      )}
      {modalInfo.open && modalInfo.type === "deleteConfirmation" && (
        <ModalWindow
          onClick={closeModal}
          data={selectedProduct}
          onClose={closeModal}
          firstText="No, Cancel"
          firstClick={closeModal}
          secondText="Yes, Delete"
          deleteFrom={"Favorites"}
          secondClick={() => deleteFromFavorites(selectedProduct)}
        />
      )}
    </Container>
  );
};

export default FavoritePage;
