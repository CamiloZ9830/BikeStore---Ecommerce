import './NavBar.css';


const bike =  { 
    nombre: "Bicicleta Trek", 
    descripcion: "Trek Urbana para amantes de bicicletas", 
    modelo: "2020", 
    precio: 500, 
    img: "https://www.bicicletasjireh.com/wp-content/uploads/2021/08/WhatsApp-Image-2022-05-31-at-5.50.35-PM.jpeg"
};



function ItemListContainer() {
    return (
        <Producto 
          img={bike.img}
          nombre={bike.nombre}
          descripcion={bike.descripcion}
          modelo={bike.modelo}
          precio={bike.precio}
        />
           )
}; 

function Producto(props) {
    const {nombre,descripcion,modelo,precio,img} = props
    
    return  (
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
                 </div>
               </div>
               </div>    
            </div>
          </div>
        </div>);
};

 export default ItemListContainer


