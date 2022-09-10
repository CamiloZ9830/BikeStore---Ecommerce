
import firestoreDB from '../services/firestoreDB'
import {getDocs,getDoc, collection,doc,where,query} from 'firebase/firestore'


export const getItems = (paramsId) =>{
     
  
    return  new Promise((resolve) => {
        const productosRef = collection(firestoreDB,'productosFS');

       if (paramsId && /[0-9]/.test(paramsId)) {
        
        const docRef = doc(productosRef, paramsId);
             getDoc(docRef).then(snapshot => {
                const itemData = {...snapshot.data(), id: paramsId}
                resolve(itemData)
             });

       }
       
       else if(paramsId) {
       
            
            const categoryQ = query (productosRef, where("categoria", "==", paramsId ));
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

