import React, { useReducer, useState} from "react";
import '../Styles.css';
import {initial, ACTIONS, reducer} from './loginReducer';
import {Link} from 'react-router-dom'
import firestoreDB from '../../services/firestoreDB'
import {getDocs, collection,where,query} from 'firebase/firestore'


function Login () {
            
           const [state, dispatch] = useReducer(reducer, initial);
           

     const handleOnChange = (e) => {
          
        dispatch({
            type: ACTIONS.LOGIN,
            payload: {key: e.target.name, value: e.target.value}
        })
     };

     console.log(state.user);
     
     

     const userLogin = {
        logInfo: {...state.user},
        date: new Date()
     }
     
     const handleLogin = (e) => {
        e.preventDefault()
        
        userLoginConfirmation(state.user.userName) 
               

         };




    const userLoginConfirmation = (userUniqueName) => {
                     
                const userDB = collection(firestoreDB,'Users');

                if (state.user.userName !== "" && state.user.password !== "") {

             return new Promise((resolve) => {


             
                    const userAccess = query (userDB, where("userName", "==", userUniqueName));
                getDocs(userAccess).then(snapshot => {
                    const queryData = snapshot.docs.map(doc => {
                     return {...doc.data(), userId: doc.id}
                    })
                  
                    resolve(queryData);
                    dispatch({type: ACTIONS.LOGINFETCHEDDATA,
                               payload: queryData})

                               
                               
                               console.log(userUniqueName);
                               
                               
                            });  
                            
                          
                            
                    
                            
                            
                        })
                        
                         }
                    else {alert("Ingresa todos los campos")}
                };
                
                
            
                   
        

        console.log(state.loginFetchData[0].userName);
        if (state.user.userName === state.loginFetchData[0].userName && 
            state.user.password === state.loginFetchData[0].password) {
                 
                console.log("Exito") 


            }

            else {console.log("Fail")};
           
            





    return (
          <>
              <form onSubmit={handleLogin}>
                  <label htmlFor="User">Nombre de usuario</label>
                  <input type="text" placeholder="Ingresa tu usuario" name="userName" 
                  onChange={handleOnChange}/>

                  <label htmlFor="Password">Contraseña</label>
                  <input type="password" placeholder="Ingresa tu contraseña" name="password"
                  onChange={handleOnChange}/>
                   
                   {state.proc ? <h5 className='loading-animation'>Logging in</h5> 
                   : <button type="submit" value="submit">Login</button>}
                  
                     
                     <Link to='/register'> <span>Registrarse</span> </Link>

              </form>
          
          
          </>
        
    )

};



export default Login