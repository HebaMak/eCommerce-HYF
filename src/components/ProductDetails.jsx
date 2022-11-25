import { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { provideContext } from "../hooks/context";
import Loading from "./Loading";
import Error from "./Error";

function ProductDetails() {
  const { id } = useParams();
  const ID = +id;
  const { URL } = useContext(provideContext);
  const { data: product, isLoading, error } = useFetch(`${URL}/${ID}`);

  const { image, title, category, description, price } = product;
  return (
    <>
      {isLoading && <Loading title="Details coming soon" />}
      {error && <Error title="Error is occurs while loading the details" />}
      {product && (
        <div
          className={isLoading ? "details-Container none" : "details-Container"}
        >
          <div className="left">
            <img src={image} alt={title} className="product-image" />
          </div>
          <div className="right">
            <h1>{title}</h1>
            <h2>{category}</h2>
            <p>{description}</p>
            <h4>Price: {price}$</h4>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
