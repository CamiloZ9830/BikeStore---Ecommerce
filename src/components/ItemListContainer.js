import './Styles.css';
import ItemList from './ItemList';
import React, {useState, useEffect} from 'react';
import { getItems } from '../helpers/helpers';
import {useParams} from 'react-router-dom'
import FadeLoader from "react-spinners/FadeLoader";



  
 function ItemListContainer() {
      
  
  const [productos, setProductos] = useState([]);
  const [loader, setLoader] = useState(false);
  const {categoryId} = useParams(); 
 useEffect(
     () => {
        setLoader(true);
       getItems().then(
         (Items) => {
          if (categoryId === undefined) {
            setLoader(false)
             setProductos(Items);
            
             
          }
          else { 
            const filterCat = Items.filter((item) => item.id.includes(categoryId));
            setLoader(false)
            setProductos(filterCat)}

            
            
           
         });
     },
       [ categoryId]
 );
 
 

    return (
      <div className='flexContent'> 
      {loader  ? 
         <FadeLoader
         size={150}
         color={'#123abc'}
         loading={loader}/>
        
      
      : 
         <ItemList productos={productos}/> 
      }
      
      </div>
    );
     
  
    

      
        
   
   
      
   
        
    
    
 
     
           
}; 

 export default ItemListContainer 


 
