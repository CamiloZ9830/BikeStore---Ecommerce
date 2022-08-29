// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGWh4OK2B_uTyFM5Wc6YAMWVlOGkP0w3M",
  authDomain: "react-bs-ecommerce.firebaseapp.com",
  projectId: "react-bs-ecommerce",
  storageBucket: "react-bs-ecommerce.appspot.com",
  messagingSenderId: "424132578660",
  appId: "1:424132578660:web:2e981380908838dd257e71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);


/**export function uploadToFirebase() {
  const productosBikeStore = collection(firestoreDB, 'productosFS')
   
   return new Promise ((resolve) => {
    for(let item of storeItemsData) {
     addDoc(productosBikeStore, item )
      
  
    }
   
    
   }) 
}*/

export default firestoreDB;

/** <button onClick={uploadToFirebase}>Upload to Firebase</button> */