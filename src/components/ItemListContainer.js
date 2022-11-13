import './Styles.css';
import ItemList from './ItemList';
import React, {useState, useEffect} from 'react';
import { getItems } from '../helpers/getItems';
import {useParams} from 'react-router-dom'
import FadeLoader from "react-spinners/FadeLoader";


  
 function ItemListContainer() {
  
   
   const {categoryId} = useParams(); 
  const [productos, setProductos] = useState([]);
  const [loader, setLoader] = useState(false);
  
    
  useEffect( () => {
        setLoader(true);
       getItems(categoryId).then(
         (Items) => {
          setLoader(false);
            setProductos(Items);
           
});
},[categoryId]);
 
 

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


 
