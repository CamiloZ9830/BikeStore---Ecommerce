import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from './components/Pagina-Wip-Error/Error'
import Wip from './components/Pagina-Wip-Error/Wip'
import { CartProvider } from './context/cartContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartItemContainer from './components/CartItemContainer/CartItemContainer';
import Validation from './components/CartItemContainer/ValidationForm/Validacion';
import Footer from './components/Footer/Footer';
import Login from './components/LoginComponent/Login';
import Register from './components/LoginComponent/Register';


function App() {
  
  return (
   
      
      <BrowserRouter>
       <CartProvider>
        <Routes>
          
          <Route path='/' element={<><NavBar/><Footer/></>}>
                  <Route index element={<ItemListContainer/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/register' element={<Register/>}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                  <Route path='/item/:Id' element={<><ItemDetailContainer/> </>}/>
                  <Route path='/cart' element={<CartItemContainer/>}></Route>
                  <Route path='/checkout' element={<Validation/>}></Route>
             </Route>
         
                   <Route path='Wip' element={<Wip/>}/>
                   <Route path='*' element={<Error/>}/>

        </Routes>
       </CartProvider>
        
    </BrowserRouter>
    
    
    
  )
}

export default App;





