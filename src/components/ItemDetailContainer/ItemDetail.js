import '../Styles.css';
import ItemCount from '../ItemCount/ItemCount';
import React, {useContext} from 'react'; 
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/cartContext';


function ItemDetail ({details}) {
      
const {nombre, descripcion, modelo, precio, img} = details || {};

const {addItem} = useContext(CartContext)






     return (
               <div className='detail-frame'>
               <div className="item" >
                    <img src={img} alt="Producto"/>
                    <div className="descripcion-Item">
                       <h3>{nombre}</h3>
                       <p>{descripcion}</p>
                       <p><b>Modelo:</b>{modelo}</p>
                      <div className="precio-cantidad">
                          <h3>${precio}</h3>
                          <div className="buttons">

                             <ItemCount initial={1} stock={6} item={details} add={addItem}/>
                            
                          </div>
                      </div>
                      <Link to={'/cart'}><div>
                       <button className="btn btn-outline-success">Finalizar compra</button>
                    </div></Link>
                    </div>
                    
              </div>
              </div>
    );

};


export default ItemDetail





