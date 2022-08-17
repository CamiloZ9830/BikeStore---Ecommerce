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
