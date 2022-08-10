import '../Styles.css';
import ItemCount from '../ItemCount/ItemCount';
import React, {useState} from 'react'; 
import {Link} from 'react-router-dom'


function ItemDetail ({details}) {
      
const {nombre, descripcion, modelo, precio, img} = details || {};

const [add, setAdd] = useState(false);

const onAdd = () => {
       setAdd(!add)
};
     
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
                            {  add ? <p>Producto agregado!</p> : <ItemCount initial={1} stock={6} onAdd={onAdd}/>}
                            
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





