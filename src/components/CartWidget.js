import './Styles.css';

function CartWidget() {
    return(
<a href="#0">
       <div className="carrito">
        <i className="bi bi-cart3"></i> 
        <div id="cantidad_Prod" className="cantidad_Prod">0</div> 
       </div></a>
   
   )
}

export default CartWidget