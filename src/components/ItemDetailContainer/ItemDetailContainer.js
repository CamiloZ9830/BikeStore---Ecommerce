import '../Styles.css';
import ItemDetail from './ItemDetail'
import React, {useState, useEffect} from 'react';
import {getItems} from '../../helpers/helpers';




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