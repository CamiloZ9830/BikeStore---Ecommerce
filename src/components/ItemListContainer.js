import './Styles.css';
import ItemList from './ItemList';
import React, {useState, useEffect} from 'react';
import {getItems} from '../helpers/helpers';


  
 function ItemListContainer() {
      
    
 const [productos, setProductos] = useState([]);
     
 useEffect(
     () => {
       getItems().then(
         (Items) => {
           setProductos(Items);
         });
     },
       []
 );


 
    return (
      

        <div className='flexContent'>
            <ItemList productos={productos}/>
        </div>
         
    );
        
           
}; 

 export default ItemListContainer 


 
