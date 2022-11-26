import { createContext, useState, useEffect } from "react";
import useFetch from "./useFetch";

export const provideContext = createContext();

const ProductContext = ({ children }) => {
  const URL = "https://fakestoreapi.com/products";

  const { data: allProducts, isLoading, error } = useFetch(URL);
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );

  useEffect(() => {
    setProducts(allProducts);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [allProducts, favorites]);

  const filterProducts = (e, cate) => {
    //filter out the products to that related to clicked button
    const filteredProducts = allProducts.filter(
      (product) => product.category === cate
    );
    setProducts(filteredProducts);

    //activate the clicked button
    Array.from(e.target.parentNode.children).forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  const handleFavorite = (id) => {
    if (favorites.includes(id)) {
      const favoritesIds = favorites.filter((favId) => favId !== id);
      setFavorites(favoritesIds);
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  const value = {
    products,
    filterProducts,
    isLoading,
    error,
    URL,
    handleFavorite,
    isFavorite,
    favorites,
  };

  return (
    <provideContext.Provider value={value}>{children}</provideContext.Provider>
  );
};

export default ProductContext;
