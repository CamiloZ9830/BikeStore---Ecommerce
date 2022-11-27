import React from 'react'
import {Link} from 'react-router-dom'

function LoginWidget() {
  return (
    <Link to='/login'>
            <div className="carrito">
                 <i className="bi bi-box-arrow-in-right"> Login</i> 
            </div></Link>
  )
}

export default LoginWidget
 /* {cantidadTotal >= 1 ?
<div  className="cantidad_Prod">{cantidadTotal}</div> 
:
  null
}*/