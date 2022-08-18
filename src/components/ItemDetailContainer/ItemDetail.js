import '../Styles.css';
import ItemCount from '../ItemCount/ItemCount';
import React, { useState} from 'react'; 
import {Link} from 'react-router-dom'


function ItemDetail ({details}) {
      
const {nombre, descripcion, modelo, precio, img, id} = details || {};




const [add, setAdd] = useState(false)

const onAdd = (cantidad) => {
   setAdd(true)
   alert(`Agregaste ${cantidad} productos a la canasta`)
};



     return (
               <div className='detail-frame'>
               <div className="item" id={id}>
                    <img src={img} alt="Producto"/>
                    <div className="descripcion-Item">
                       <h3>{nombre}</h3>
                       <p>{descripcion}</p>
                       <p><b>Modelo:</b>{modelo}</p>
                      <div className="precio-cantidad">
                          <h3>${precio}</h3>
                         
                      </div>
                      { add ? <Link to={'/cart'}><div>
                   <button className="btn btn-outline-success">Finalizar compra</button>
                </div></Link> 
                      
                   :
                   <div className="precio-cantidad buttons">

                             <ItemCount initial={1} stock={6} item={details} onAdd={onAdd} />
                            
                          </div>
                    }
                      
                    </div>
                    
              </div>
              </div>
    );

};


export default ItemDetail





