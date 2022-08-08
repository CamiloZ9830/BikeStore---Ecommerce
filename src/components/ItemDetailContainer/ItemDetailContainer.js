import '../Styles.css';
import ItemDetail from './ItemDetail'
import React, {useState, useEffect} from 'react';
import storeItemsData from '../../data/data';

let getItems = () =>{
    return new Promise((resolve) => {
      setTimeout(() => resolve(storeItemsData),2000);
    })
  };


function ItemDetailContainer() {
    
    const [details, setDetails] = useState([]);
     
    useEffect(() => {
      getItems().then(
        (Item) => {
          setDetails(Item[0]);
        });
    },[]);
   
 
     return (
        <ItemDetail item={details}/>
    );
};






export default ItemDetailContainer