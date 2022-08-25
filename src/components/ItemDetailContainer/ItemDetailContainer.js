import '../Styles.css';
import ItemDetail from './ItemDetail'
import React, {useState, useEffect} from 'react';
import { getItems } from '../../helpers/getItems';
import {useParams} from 'react-router-dom'
import FadeLoader from "react-spinners/FadeLoader";

const override = {
  display: "block",
  margin: "0 auto",
};


function ItemDetailContainer() {
    const {Id} = useParams();
    const [details, setDetails] = useState([]);
    const [loader, setLoader] = useState(false);
     
    useEffect(() => {
      setLoader(true);
      getItems(Id).then(
        Item => {
          setLoader(false);
          setDetails(Item);
        });
    },[Id]);
    
    
   
       return ( <>
                {loader  ? 
                 <FadeLoader 
                   size={150}
                   color={'#123abc'}
                   loading={loader}
                   cssOverride={override}/>
              
                : 
                 
                 <ItemDetail details={details}/>}
                </>
);
};





export default ItemDetailContainer