import './Styles.css';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

function CartWidget() {
     
    const {cantidadTotal} = useContext(CartContext)
     
     
    
    return(
        <Link to='/cart'>
            <div className="carrito">
                 <i className="bi bi-cart3"></i> 
                  {cantidadTotal >= 1 ?
              <div  className="cantidad_Prod">{cantidadTotal}</div> 
               :
                 null
               }
            </div></Link>
   
   )
}

export default CartWidget