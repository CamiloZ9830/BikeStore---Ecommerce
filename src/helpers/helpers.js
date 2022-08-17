comm
import storeItemsData from "../data/data";


export let getItems = () =>{
   
    return new Promise((resolve) => {
      setTimeout(() => resolve(storeItemsData),2000);
    })
  
    
  };



import storeItemsData from '../data/data';


export const getItems = (itemId) =>{
  
    return  new Promise((resolve, reject) => {

         setTimeout(() => {if(storeItemsData) {if(itemId) {resolve(storeItemsData.find((item) => item.id === itemId))}
         else {resolve(storeItemsData);}
        
          }
        else {reject(alert('No se pudieron mostrar los productos'))}}
        ,2000)
}
);
};

