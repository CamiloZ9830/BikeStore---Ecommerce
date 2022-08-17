import '../Styles.css';
import React, {useState} from 'react';


function ItemCount({initial, stock, add}) {
    const [cantidad, setCantidad] = useState(initial);



    

   let itemIncremento = () => {
        
   
      if(cantidad < stock) {
        setCantidad(prevCount => prevCount + 1);
      }
      else {
        alert('No se pueden agregar mas productos')
      }
        
};

    let itemDecremento = () => {
        if (cantidad > initial){
            setCantidad(prevCount => prevCount - 1);
        }
       
    }

    return (
        <div>
            <div className="buttons">
                <i onClick={() => itemDecremento()} className="bi bi-dash-circle"></i> 
                <div  className="cantidad">{cantidad}</div>
                <i onClick={() => itemIncremento()}className="bi bi-plus-circle"></i>
                <div >
                       <button className="btn btn-outline-success" onClick={() => add(cantidad)} >Agregar al Carrito</button>
                    </div>
                    
            </div>
            
        </div>
            
    );


};

export default ItemCount
