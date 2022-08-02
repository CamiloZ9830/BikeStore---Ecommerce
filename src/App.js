import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer 
     nombre= "Bicicleta Trek" 
     descripcion= "Trek Urbana para amantes de bicicletas" 
     modelo= "2020"
     precio= {500} 
     img= "https://www.bicicletasjireh.com/wp-content/uploads/2021/08/WhatsApp-Image-2022-05-31-at-5.50.35-PM.jpeg" />
    </>
  );
}

export default App;





