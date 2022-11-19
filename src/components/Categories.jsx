import Category from "./Category"
import {useContext} from 'react'
import { provideContext } from "../hooks/context"


function Categories() {
  const {categories} = useContext(provideContext)
  
  return (
    <div className="categories_container"> 
      {categories &&
        categories.map((category, index) => (
          <Category key={index} category={category} />
        ))
      }
    </div>
  )
}

export default Categories
