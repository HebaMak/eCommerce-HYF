import { useContext, useEffect, useState } from "react";
import { provideContext } from "../hooks/context";
import Product from "../components/Product";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Favorites = () => {
  const { favorites, URL } = useContext(provideContext);

  const [favProducts, setFavProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const promises = favorites.map((id) => {
      return fetch(`${URL}/${id}`);
    });
    Promise.all(promises)
      .then((responses) => {
        return Promise.all(responses.map((res) => res.json()));
      })
      .then((data) => {
        setFavProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [favorites, URL]);

  return (
    <div className="favorites_page">
      {isLoading && <Loading title="Favorites Products Coming Soon" />}
      {isError && (
        <Error title="Error is occurs while loading the Favorites Products" />
      )}
      <h1 className={favProducts.length === 0 ? "fav_title" : "fav_title none"}>
        You haven't chosen any favorites yet!
      </h1>
      {favProducts.length > 0 && (
        <div className="fav_container">
          {favProducts &&
            favProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Favorites;
