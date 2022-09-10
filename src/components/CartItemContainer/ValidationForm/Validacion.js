import React, {useContext, useReducer} from 'react';
import {CartContext} from '../../../context/cartContext'
import {collection,addDoc} from 'firebase/firestore'
import firestoreDB from '../../../services/firestoreDB';
import Success from './Success';
import {initialValues, ACTIONS, reducer} from './reducer'



function Validation() {
    const [state, dispatch] = useReducer(reducer, initialValues);
      
    const {items, valorTotal, removeAll} = useContext(CartContext);

  
   
    const handleOnChange = (e) => {
          
            dispatch({
               type: ACTIONS.FORMDATA,
               payload: {key: e.target.name, value: e.target.value},
            });
};
     
const checkoutOrder = {
    comprador: {...state.buyer},
    items: [...items],
    total: valorTotal,
    date: new Date()
};


    function handleSubmit(e) {
        
        e.preventDefault();
           
        const {name, phonenumber, email} = state.buyer
        
        if(items.length !== 0) {
            
            if(name && phonenumber && email) {
                     
                new Promise ((resolve) => {
                     const ordenesFirestore = collection(firestoreDB, 'ordenesBS');
                       addDoc(ordenesFirestore, checkoutOrder).then((doc => {
                          const docRef = doc.id
                          resolve(docRef);
                          dispatch({type: ACTIONS.ORDERID, payload: docRef});
                      }));
                  
                      
                     
                       dispatch({type: ACTIONS.PROC});
                     
                     },setTimeout(() => {removeAll(); 
                                         dispatch({type: ACTIONS.PAGESUCCESS});},2000))}
                         
                         else {alert('Necesitas ingresar todos los campos')};
           }  
           
        else {alert('Agrega un producto a la canasta')}   
           
};
    
  


    return (

         <>

         {state.success ? 
           
           <Success orderId={state.orderId}/>

           :
         <>
        <div className='center-cart-div'>
            <h4>RESUMEN</h4>
           <table border={1}>
            <thead>
            <tr>
           
               <th>Producto</th>
               <th>Cantidad</th>
                <th>subTotal</th>
             </tr>
            </thead>
            
                  {items.map((item) => {
                return (
                <tbody key={item.id}>
                    <tr>
                        
                       <td><img src={item.img} alt={'ImagenResumen'} style={{width: '75px', borderRadius: '4px'}}/>{item.nombre}</td>
                       <td>{`${item.cantidad} U`}</td>
                       <td>{`$ ${item.precio * item.cantidad}`}</td>
                    </tr>
                </tbody>
                    
)  
})}
           </table>
  
     <h2>{`Valor Total $ ${valorTotal}`}</h2>

</div>

          

        <form className='form-container' onSubmit={handleSubmit} >
            <label htmlFor="Nombre">Nombre</label>
            <input type="text" placeholder="Ingresa tu nombre" name="name" value={state.name}
            onChange={handleOnChange}></input>
            
            
            <label htmlFor="Telefono">Telefono</label>
            <input type="number"  placeholder="Ingresa tu numero de telefono" name="phonenumber"
             value={state.phonenumber}  onChange={handleOnChange}></input>
            
           
            <label htmlFor="Correo">Correo</label>
            <input type="email" pattern=".+\.com" placeholder="Ingresa tu correo" name="email" 
            value={state.email}  onChange={handleOnChange}></input>
            
            
           {state.proc ? <h5 className='loading-animation'>Realizando operacion </h5> : <button type="submit" value="submit">Confirmar Compra</button>} 
        </form>
        </>
        
        }
        
        </>
    )
}; 

export default Validation