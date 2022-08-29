import '../../Styles.css';
import {Link} from 'react-router-dom'

function Success({orderId}) {

return (
    <div className="cart success ">
     <h4>{`Orden Id: ${orderId}`}</h4>
     <h2>Realizado con Exito!</h2>
      <p>Gracias por tu compra!</p>
     <Link to={'/'}><button className='btn btn-outline-primary'>Volver a la pagina principal</button></Link> 
</div>


)


};


export default Success