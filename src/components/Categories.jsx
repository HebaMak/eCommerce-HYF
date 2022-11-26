import { useContext } from "react";
import { provideContext } from "../hooks/context";
import useFetch from "../hooks/useFetch";
import Category from "./Category";

function Categories() {
  const { URL } = useContext(provideContext);
  const { data: categories } = useFetch(`${URL}/categories`);

  return (
    <div className="categories_container">
      {categories &&
        categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
    </div>
  );
}

export default Categories;
