import '../Styles.css';
import {Link} from 'react-router-dom'



function Error () {
    return (
         <section>
            <h2>Error: Pagina no encontrada</h2>
            <br/>
            <button className="btn btn-outline-primary"><Link to='/'>Volver a la pagina principal</Link></button>
         </section>
    );
};


export default Error