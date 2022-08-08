import './Styles.css';



function Item ({nombre, precio, img,id}) {
    
         return (
              <div className="item" >
                    <img src={img} alt="Producto"/>
                    <div className="descripcion-Item">
                       <h3>{nombre}</h3>                    
                      <div className="precio-cantidad">
                          <h3>${precio}</h3>
                          
                      </div>
                    </div>
                   
              </div>
      );
  
  }
 
export default Item