import './Styles.css';
import CartWidget from './CartWidget';
import {Link,NavLink,Outlet} from 'react-router-dom';


function NavBar() {
return (
     <>
    <div className="navbar">
       <Link to='/'><h2>Bike Store</h2></Link>
         <div className = 'paginas'> 
              <div><NavLink style={({isActive}) => 
                isActive ? {color: 'purple'} : {color:'white'}} to={`/category/${'ER'}`} className="links_Pag">Equipo y Repuestos</NavLink></div>
              <div><NavLink style={({isActive}) => 
                isActive ? {color: 'purple'} : {color:'white'}} to={`/category/${'BC'}`} className="links_Pag">Bicicletas</NavLink></div>
              <div><NavLink style={({isActive}) => 
                isActive ? {color: 'purple'} : {color:'white'}} to={`/category/${'BE'}`} className="links_Pag">Electra Bikes</NavLink></div>
              <div><Link  to='Wip' className="links_Pag" >Tienda Oficial</Link></div>
         </div>
         < CartWidget/>
         
    </div>
    <Outlet/>
    </>
)
};

export default NavBar
