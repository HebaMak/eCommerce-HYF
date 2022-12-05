import { useContext } from "react";
import { provideContext } from "../hooks/context";
import Categories from "../components/Categories";
import Product from "../components/Product";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Products() {
  const { products, isLoading, isError, filteredPro } =
    useContext(provideContext);

  return (
    <>
      {isLoading && (
        <Loading title="Just count to 10 and Products will Come 😀" />
      )}
      {isError && <Error title="Error in Fetching data" />}
      <Categories />
      <div className="products">
        {filteredPro.length === 0
          ? products &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          : products &&
            filteredPro.map((product) => (
              <Product key={product.id} product={product} />
            ))}
      </div>
    </>
  );
}

export default Products;
