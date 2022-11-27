import { addDoc, collection } from 'firebase/firestore';
import React, {useReducer, useState} from 'react'
import firestoreDB from '../../services/firestoreDB';
import {initial, ACTIONS, reducer} from './loginReducer'
import Success from '../CartItemContainer/ValidationForm/Success';

function Register() {
        
        const [state, dispatch] = useReducer(reducer, initial);

        const [res, setRes] = useState({})

        const handleOnChange = (e) => {
              
              dispatch({
                   type: ACTIONS.REGISTRATION,
                   payload: {key: e.target.name, value: e.target.value}
              })


        };

        const newUser =  {...state.registration, date: [new Date()]}
             
        

        console.log(state.registration);


        const handleRegistration = (e) => {
            e.preventDefault();

            if(Object.values(state.registration).indexOf("") === -1) {
                   
                new Promise((resolve, reject) => {
                      const register = collection(firestoreDB, 'Users');
                         addDoc(register, newUser).then((doc => {
                            const docRef = doc.id
                            resolve(docRef);
                            reject(console.log("Could no retrieve data"));
                            
                            setRes(docRef)
                            
                         }));


                         dispatch({type: ACTIONS.PROC});
                        
                        
                        },  dispatch({type: ACTIONS.SUCCESS}));
                  }

                  else {alert ('Debes llenar todos los campos')}

            

                 

        };

console.log(res);
console.log("Valor es :", Object.values(state.registration));

  return (
    <>

        {state.success ?

            <Success/>
            
            :


          <form className='registration-form' onSubmit={handleRegistration}>
          <label htmlFor='Nombres'>Nombres</label>
          <input type="text" placeholder="Nombres" name='names'
          onChange={handleOnChange}/>
          
          <label htmlFor='Apellidos'>Apellidos</label>
          <input type="text" placeholder="Apellidos" name='lastNames'
          onChange={handleOnChange}/>
          
          <label htmlFor='Usuario'>Nombre de Usuario</label>
          <input type="text" placeholder="Nombre de Usuario" name='userName'
          onChange={handleOnChange}/>
          
          <label htmlFor="Telefono">Telefono</label>
          <input type="number"  placeholder="Numero de telefono" name="phoneNumber"
          onChange={handleOnChange}/>

          <label htmlFor="Correo">Correo</label>
          <input type="email" pattern=".+\.com" placeholder="Ingresa tu correo" name="email" 
           onChange={handleOnChange}/>

          <label htmlFor="Password">Contraseña</label>
          <input type="password" placeholder="Ingresa tu contraseña" name="password"
           onChange={handleOnChange}/>

          {state.proc ? 
            <h5 className='loading-animation'>Realizando operacion </h5> 
            : <button type="submit" value="submit">Registrarse</button>}
             


      </form>
                    
    
    
    }

      
    </>
  )
}

export default Register