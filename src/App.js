import { BrowserRouter , Routes , Route} from 'react-router-dom';
import ProductContext from './hooks/context';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  return (
    <ProductContext>
      <BrowserRouter>
        <h1 className="title">Products</h1>
        <Routes>
          <Route path='/'  element={<Products />}/>
          <Route path='/product/:id'  element={<ProductDetails />}/>
        </Routes>
      </BrowserRouter>
    </ProductContext>
  );
}

export default App;
