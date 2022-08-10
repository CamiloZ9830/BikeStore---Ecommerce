import storeItemsData from "../data/data";


export let getItems = () =>{
   
    return new Promise((resolve) => {
      setTimeout(() => resolve(storeItemsData),2000);
    })
  
    
  };


