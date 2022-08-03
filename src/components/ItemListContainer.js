import './Styles.css';
import ItemCount from './ItemCount';




function ItemListContainer({nombre, descripcion, modelo, precio, img} ) {
  
    return (
      <div className='flexContent'>
          <div className="shop">
            <div className="item">
               <img src={img} alt="Producto"/>
               <div className="descripcion-Item">
                  <h3>{nombre}</h3>
                  <p>{descripcion}</p>
                  <p><b>Modelo:</b>{modelo}</p>
               <div className="precio-cantidad">
                 <h3>${precio}</h3>
                 <div className="buttons">
                 <ItemCount initial={8} stock={15}/>
                
                 </div>
               </div>
               
               </div>
               <button className="btn btn-outline-success">Agregar al Carrito</button>
                      
            </div>
          </div>
        </div>
    )
        
           
}; 

 export default ItemListContainer



