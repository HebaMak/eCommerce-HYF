import { useParams } from "react-router-dom";
import Product from "../components/Product";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";

const ProductDetails = () => {
  const { id } = useParams();
  const ID = +id;

  const {
    data: product,
    isLoading,
    isError,
  } = useFetch(`https://fakestoreapi.com/products/${ID}`);
  const { category, description, title, rating } = product;

  return (
    <>
      {isLoading && <Loading title="Details coming soon" />}
      {isError && <Error title="Error is occurs while loading the details" />}
      {product && (
        <div
          className={isLoading ? "details-Container none" : "details-Container"}
        >
          <Product product={product} />
          <div className="details">
            <h2>{title}</h2>
            <h3>{category}</h3>
            <p>{description}</p>
            <h3>Rating: {rating.rate}</h3>
            <h3>Sold: {rating.count} times</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
