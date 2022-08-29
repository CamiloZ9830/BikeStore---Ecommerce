import '../Styles.css';
import ItemCount from '../ItemCount/ItemCount';
import React, { useState } from 'react'; 
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ItemDetail ({details}) {
      
const {nombre, descripcion, modelo, precio, img, id} = details || {};




const [add, setAdd] = useState(false)

const onAdd = (cantidad) => {
   setAdd(true)
   toast(<>Agregaste producto <b>{cantidad} {nombre}</b> a la canasta</>)
};



     return (
               <div className='detail-frame'>
               <div className="item" key={id}>
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





