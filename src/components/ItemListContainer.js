import './Styles.css';
import ItemList from './ItemList';
import React, {useState, useEffect} from 'react';
import storeItemsData from '../data/data';

let getItems = () =>{
    return new Promise((resolve) => {
      setTimeout(() => resolve(storeItemsData),2000);
    })
  };
  
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


 
