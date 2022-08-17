import '../Styles.css';
import {Link} from 'react-router-dom'




function Wip () {
    return (
         <section>
            <h2>Pagina no disponible</h2>
            <br/>
            <h5>Disculpa las molestias</h5>
            <br/>
            <button className="btn btn-outline-primary"><Link to='/'>Volver a la pagina principal</Link></button>
         </section>
    );
};


export default Wip