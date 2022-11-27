import './Styles.css';
import CartWidget from './CartWidget';
import {Link,NavLink,Outlet} from 'react-router-dom';
import LoginWidget from './LoginComponent/LoginWidget';


function NavBar() {
return (
     <>
    <div className="navbar">
    
       <Link to='/'><h2>Bike Store</h2></Link>
         <div className = 'paginas'> 
              <div className="links_Pag"><NavLink style={({isActive}) => 
                isActive ? {color: 'purple'} : {color:'white'}} to={'/category/Equipo-Repuestos'}>Equipo y Repuestos</NavLink></div>
              <div className="links_Pag"><NavLink style={({isActive}) => 
                isActive ? {color: 'purple'} : {color:'white'}} to={'/category/Ruta'}>Bicicletas</NavLink></div>
              <div className="links_Pag"><NavLink style={({isActive}) => 
                isActive ? {color: 'purple'} : {color:'white'}} to={'/category/Electricas'} >Electra Bikes</NavLink></div>
              <div className="links_Pag"><Link  to='Wip'  >Tienda Oficial</Link></div>
         </div>
         <LoginWidget/>
         <CartWidget/>
         
    </div>
   
    <Outlet/>
    </>
)
};

export default NavBar
