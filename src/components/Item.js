import './Styles.css';
import {Link} from 'react-router-dom'



function Item ({nombre, precio, img,id,categoria}) {
      
      return ( <Link style={{textDecoration: 'none'}} 
                 to={`/item/${id}`}>
                <div className="item">
                       <img src={img} alt="Producto"/>
                    <div className="descripcion-Item">
                       <h3>{nombre}</h3> 
                                         
                      <div className="precio-cantidad">
                          <h3>${precio}</h3>
                      </div>
                    </div>
                </div>
              </Link>
      );
  };
 
export default Item


