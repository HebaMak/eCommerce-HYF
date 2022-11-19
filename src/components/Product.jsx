import { Link } from 'react-router-dom'

function Product({product}) {

  const {title ,  image , id} = product
  return (
    <div div className='product'>

      {product && 
        <Link to={`/product/${id}`} >
          <img className="image" src={image} alt={title} />
          <h3 className="title">{title.substring(5)}</h3>
        </Link>
      }
    </div>
  )
}

export default Product