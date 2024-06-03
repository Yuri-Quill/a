import "./CartPage.scss";
import { useState, useEffect } from "react";
import UList from "../../components/UList/UList";
import Container from "../../components/Container/Container";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { useOutletContext } from "react-router-dom";
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';

const CartPage = ({ data }) => {
  const { setCart } = useOutletContext();
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalInfo, setModalInfo] = useState({ open: false, type: "" });

  const deleteCard = (product, type) => {
    setSelectedProduct(product);
    setModalInfo((prevInfo) => ({
      open: !prevInfo.open,
      type: type === prevInfo.type ? "" : type,
    }));
    document.body.style.overflow = modalInfo.open ? "auto" : "hidden";
  };

  const closeModal = () => {
    setModalInfo({ open: false, type: "" });
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };

  const removeFromCart = (product) => {
    const updatedCart = storedCart.filter((id) => id !== product.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    closeModal();
  };

  if (storedCart.length === 0) {
    return <ErrorPage  errorMessage="Your cart is empty" />;
  }

  const buyProduct = (product) => {
alert('Thank you for your purchase')
removeFromCart(product)
  };
  return (
    <Container>
      <UList className="cart__list">
        {data
          .filter((item) => storedCart.includes(item.id))
          .map((item) => (
            <ProductCard
              className="cart__card"
              key={item.id}
              data={item}
              addToCart={() => buyProduct(item)}
              onClose={() => deleteCard(item, "removeFromCart")}
              btnText={"Buy"}
            />
          ))}
      </UList>
      {modalInfo.open && modalInfo.type === "removeFromCart" && (
        <ModalWindow
          onClick={closeModal}
          data={selectedProduct}
          onClose={closeModal}
          firstText="No, Cancel"
          firstClick={closeModal}
          secondText="Yes, Remove"
          secondClick={() => removeFromCart(selectedProduct)}
          deleteFrom="Cart"
        />
      )}
    </Container>
  );
};

export default CartPage;
