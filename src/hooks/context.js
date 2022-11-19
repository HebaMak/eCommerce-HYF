import { createContext , useState, useEffect } from "react";
import useFetch from "./useFetch";

export const provideContext = createContext()

const ProductContext = ({children}) => {
  const URL = 'https://fakestoreapi.com/products'
  const {data: allProducts ,  isLoading , error} = useFetch(URL);
  const {data: categories} = useFetch(`${URL}/categories`)
  const [products , setProducts] = useState([])
  useEffect(() => {
    setProducts(allProducts)
  } , [allProducts])


  const filterProducts = (e , cate) => {
    //filter out the products to that related to clicked button
    const filteredProducts = allProducts.filter(product=> product.category === cate)
    setProducts(filteredProducts)

    //activate the clicked button
    Array.from(e.target.parentNode.children).forEach(btn => {
      btn.classList.remove('active')
    })
    e.target.classList.add('active')
  }
  

  const value = {
    products,
    categories,
    filterProducts,
    isLoading, 
    error,
    URL
  }

  return(
    <provideContext.Provider value={value}>
      {children}
    </provideContext.Provider>
  )
}

export default ProductContext