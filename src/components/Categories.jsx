import useFetch from "../hooks/useFetch";
import Category from "./Category";

function Categories() {
  const { data: categories } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

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
