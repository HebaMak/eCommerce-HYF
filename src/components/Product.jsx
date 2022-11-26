import { Link } from "react-router-dom";
import Heart from "./Heart";

const Product = ({ product }) => {
  const { image, id, title, price } = product;

  return (
    <>
      {product && (
        <div className="product">
          <Link to={`/product/${id}`}>
            <img src={image} alt={title} className="product-image" />
            <h3 className="product-description">{title}</h3>
          </Link>
          <div className="rating">
            <h3>Price: {price}$</h3>
            <Heart id={id} />
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
