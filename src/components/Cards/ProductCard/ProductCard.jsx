import "./ProductCard.scss";
import favoriteLiked from "../../../assets/favorite-liked.png";
import favoriteImg from "../../../assets/favorite.png";
import CloseBtn from "../../Buttons/CloseBtn/CloseBtn";
import Button from "../../Buttons/Button/Button";
import PropTypes from "prop-types";

const ProductCard = ({
  data,
  onClose,
  className,
  toggleFavorite,
  addToCart,
  priceColor,
  desc,
  isFavorite,
  btnText,
}) => {
  return (
    <li className={`${className}-item`}>
      {onClose && <CloseBtn onClose={onClose} />}
      <img className={`${className}-img`} src={data.image} alt={data.title} />
      <h2 className={`${className}-title`}>{data.title}</h2>
      {toggleFavorite && (
        <button className={`${className}-favorite-btn`} onClick={toggleFavorite}>
          <img
            className={`${className}-favorite-img`}
            src={isFavorite ? favoriteLiked : favoriteImg}
            alt="favorite button"
            width="30"
            height="30"
          />
        </button>
      )}
      {priceColor && (
        <>
          <p className={`${className}-color`}>Color: {data.color}</p>
          <p className={`${className}-price`}>Price: {data.price} ₴</p>
        </>
      )}
      {desc && <p className={`${className}-description`}>{data.description}</p>}
      {addToCart && (
        <Button className={`${className}-btn`} onClick={addToCart} type="button">
          {btnText} 
        </Button>
      )}
    </li>
  );
};

ProductCard.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
  className: PropTypes.string,
  toggleFavorite: PropTypes.func,
  addToCart: PropTypes.func,
  priceColor: PropTypes.bool,
  desc: PropTypes.bool,
  isFavorite: PropTypes.bool,
};

export default ProductCard;

// const ProductCard = ({ product, onClose }) => {
//   const { setCart, setFavorite } = useOutletContext();
//   const [isFavorite, setIsFavorite] = useState(false);

//   useEffect(() => {
//     const favorite = JSON.parse(localStorage.getItem("favorite")) || [];
//     if (favorite.includes(product.id)) {
//       setIsFavorite(true);
//     }
//   }, [product.id]);

//   const addToCart = () => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     if (!cart.includes(product.id)) {
//       cart.push(product.id);
//       setCart(cart);
//       localStorage.setItem("cart", JSON.stringify(cart));
//     }
//   };

//   const toggleFavorite = () => {
//     const favorite = JSON.parse(localStorage.getItem("favorite")) || [];
//     if (favorite.includes(product.id)) {
//       const updatedFavorite = favorite.filter((favId) => favId !== product.id);
//       setFavorite(updatedFavorite);
//       localStorage.setItem("favorite", JSON.stringify(updatedFavorite));
//       setIsFavorite(false);
//       onClose();
//     } else {
//       favorite.push(product.id);
//       setFavorite(favorite);
//       localStorage.setItem("favorite", JSON.stringify(favorite));
//       setIsFavorite(true);
//     }
//   };

//   const handleClose = () => {
//     toggleFavorite();
//     onClose();
//   };

//   return (
//     <li className="product__card-item">
//       <CloseBtn onClose={handleClose} />
//       <h2 className="product__card-title">{product.title}</h2>
//       <img className="product__card-img" src={product.image} alt={product.title} />
//       <button className="product__card-favorite-btn" onClick={toggleFavorite}>
//         <img
//           className="product__card-favorite-img"
//           src={isFavorite ? favoriteLiked : favoriteImg}
//           alt="favorite button"
//           width="30"
//           height="30"
//         />
//       </button>
//       <p className="product__card-color">Color: {product.color}</p>
//       <p className="product__card-price">Price: {product.price} ₴</p>
//       <p className="product__card-description">{product.description}</p>
//       <button className="product__card-btn" onClick={addToCart} type="button">
//         Add to Cart
//       </button>
//     </li>
//   );
// };

// export default ProductCard;
