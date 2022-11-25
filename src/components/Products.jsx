import { useContext } from "react";
import { provideContext } from "../hooks/context";
import Categories from "./Categories";
import Product from "./Product";
import Loading from "./Loading";
import Error from "./Error";

function Products() {
  const { products, isLoading, error } = useContext(provideContext);

  return (
    <>
      {isLoading && (
        <Loading title="Just count to 10 and Products will Come 😀" />
      )}
      {error && <Error title="Error in Fetching data" />}
      <Categories />
      {products && (
        <div className="products_container">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default Products;
