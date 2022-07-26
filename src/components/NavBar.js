import './NavBar.css';

function CartWidget () {
    return(
<a href="#0">
       <div className="carrito">
        <i className="bi bi-cart3"></i> 
        <div id="cantidad_Prod" className="cantidad_Prod">0</div> 
       </div></a>
   
   )
}


function NavBar() {
return (
    <div className="navbar">
    <a href="index.html"><h2>Bike Store</h2></a>
    <div className = 'paginas'> 
        <div><a className="links_Pag" href="#0">Equipo y Repuestos</a></div>
        <div><a className="links_Pag" href="#1">Bicicletas</a></div>
        <div><a className="links_Pag"href="#2">Electra Bikes</a></div>
        <div><a className="links_Pag" href="#3"target="_blank">Tienda Oficial</a></div>
    </div>
   < CartWidget/>
    </div>
    
)
}

export default NavBar;
