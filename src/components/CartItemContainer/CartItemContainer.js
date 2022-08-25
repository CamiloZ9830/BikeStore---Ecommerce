import React, {useContext} from "react";
import {CartContext} from '../../context/cartContext'

import {Link} from 'react-router-dom'



function CartItemContainer() {
     const {items, removeItem, removeAll} = useContext(CartContext);
     
    const valorTotal = items.map((articulo) => {
      const {cantidad, precio} = articulo;
      return precio * cantidad
       
     }).reduce((value1, value2) => value1 + value2, 0 )
      console.log(items);
     return (
      <>  
     {items.length === 0 ? <div className="center-cart-div"><h3 >Canasta Vacia</h3><Link to={'/'}><button className="btn btn-outline-primary">Volver a la pagina principal</button></Link></div>
      
      :
      
     <> <button className="btn btn-outline-danger center" onClick={() => removeAll()}>Remover todos los productos</button> 
      <h2 className="center-cart-div">{`Total $ ${valorTotal}`}</h2> </>}
      
        
        <div className="shop">
        
         {items.map((item) => {

            const {nombre, descripcion, modelo, precio, img, id, cantidad} = item;
            
         return (
           
            <div className="item"  key={id}>
                    <i style={{background: 'red', color:'white', borderRadius: '5px'}} className="bi bi-x" onClick={() => removeItem(id)}></i>
                    <img src={img} alt="Producto"/>
                    <div className="descripcion-Item">
                       <h3>{nombre}</h3>
                       <p>{descripcion}</p>
                       <p><b>Modelo:</b>{modelo}</p>
                       <p><b>Cantidad:</b>{cantidad}</p>
                       <p><b>x $</b>{precio}</p>
                      <div className="precio-cantidad">
                          <h3>$ {precio * cantidad}</h3>
                          
                      </div>
                      
                    </div>
                    
              </div>
         )
                 

         
            
         } )}

        </div>
        </>
     )

};



export default CartItemContainer


               
             