import React, {useContext} from "react";
import {CartContext} from '../../context/cartContext'
import {Link} from 'react-router-dom'



function CartItemContainer() {
     const {items, valorTotal, removeItem, removeAll} = useContext(CartContext);
     
    
     return (
      <>  
     {items.length === 0 ? <div className="center-cart-div cart "><h3>Canasta Vacia</h3><img src="imagenes/empty-cart-img.jpg" style={{opacity:'0.03', width:'500px'}} alt="epmty cart"/><Link to={'/'}><button className="btn btn-outline-primary">Volver a la pagina principal</button></Link></div>
      
      
      :
      
     <> <button className="btn btn-outline-danger center" onClick={() => removeAll()}>Remover todos los productos</button> 
      <h2 className="center-cart-div">{`Total $ ${valorTotal}`}</h2> 

        
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
                       <p><b>Modelo: </b>{modelo}</p>
                       <p><b>Cantidad: </b>{cantidad}</p>
                       <p><b>x $</b>{precio}</p>
                      <div className="precio-cantidad">
                          <h3>$ {precio * cantidad}</h3>
                          
                      </div>
                     
                    </div>
                    
              </div>
              
             
         )
} )}
          
        </div>
        <Link to={'/checkout'}><button className="btn btn-outline-success center">Checkout</button></Link> </>}
        </>
     )

};



export default CartItemContainer


               
             