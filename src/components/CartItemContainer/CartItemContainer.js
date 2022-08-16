import React, {useContext} from "react";
import {CartContext} from '../../context/cartContext'
import ItemCount from "../ItemCount/ItemCount";
import {Link} from 'react-router-dom'



function CartItemContainer() {
     const {items, addItem, removeItem, removeAll} = useContext(CartContext);
      console.log(items);
     return (
      <>  
     {items.length === 0 ? <div className="center-cart-div"><h3 >Canasta Vacia</h3><Link to={'/'}><button className="btn btn-outline-primary">Volver a la pagina principal</button></Link></div>
      
      :
      
      <button className="btn btn-outline-danger center" onClick={() => removeAll()}>Remover todos los productos</button> }
      
        
        <div className="shop">
        
         {items.map((item) => {

            const {nombre, descripcion, modelo, precio, img, id} = item;
                 
         return (
            <div className="item"  key={id}>
                    <i className="bi bi-x" onClick={() => removeItem(id)}></i>
                    <img src={img} alt="Producto"/>
                    <div className="descripcion-Item">
                       <h3>{nombre}</h3>
                       <p>{descripcion}</p>
                       <p><b>Modelo:</b>{modelo}</p>
                      <div className="precio-cantidad">
                          <h3>${precio}</h3>
                          <div className="buttons">
                             <ItemCount initial={1} stock={6} item={item} add={addItem} />
                            
                          </div>
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


               
             