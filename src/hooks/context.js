import { createContext, useState, useEffect } from "react";
import useFetch from "./useFetch";

export const provideContext = createContext();

const ProductContext = ({ children }) => {
  const URL = "https://fakestoreapi.com/products";

  const { data: allProducts, isLoading, isError } = useFetch(URL);
  const [products, setProducts] = useState([]);
  const [filteredPro, setFilteredPro] = useState([]);
  const [favorites, setFavorites] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );

  useEffect(() => {
    if (filteredPro.length === 0) {
      setProducts(allProducts);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites, allProducts, filteredPro]);

  const filterProducts = (e, cate) => {
    //filter out the products to that related to clicked button
    const filtered = allProducts.filter((product) => product.category === cate);
    setFilteredPro(filtered);

    //activate the clicked button
    Array.from(e.target.parentNode.children).forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  // clear filter
  const clearFilter = () => {
    setFilteredPro([]);
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
    URL,
    products,
    isError,
    favorites,
    isLoading,
    clearFilter,
    isFavorite,
    filteredPro,
    filterProducts,
    handleFavorite,
  };

  return (
    <provideContext.Provider value={value}>{children}</provideContext.Provider>
  );
};

export default ProductContext;
