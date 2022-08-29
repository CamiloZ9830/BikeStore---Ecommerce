
import firestoreDB from '../services/firestoreDB'
import {getDocs,getDoc, collection,doc,where,query} from 'firebase/firestore'


export const getItems = (itemId) =>{
     
  
    return  new Promise((resolve) => {
        const productosRef = collection(firestoreDB,'productosFS');

       if (itemId && /[0-9]/.test(itemId)) {
        
        const docRef = doc(productosRef, itemId);
             getDoc(docRef).then(snapshot => {
                const itemData = {...snapshot.data(), id: itemId}
                resolve(itemData)
             });

       }
       
       else if(itemId) {
       
            
            const categoryQ = query (productosRef, where("categoria", "==", itemId ));
            getDocs(categoryQ).then(snapshot => {
                const queryData = snapshot.docs.map(doc => {
                 return {...doc.data(), id: doc.id}
                })
              
                resolve(queryData);
           
                
            });
          }
            
       else  {
        getDocs(productosRef).then(snapshot => {
             
                const docsData = snapshot.docs.map(doc => 
                    {return {...doc.data(), id: doc.id }} )
               
                resolve(docsData)
                
                
                
               
               });
       }
                
       

                
        
      
        
}
);
};

