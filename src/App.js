import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from './components/Pagina-Wip-Error/Error'
import Wip from './components/Pagina-Wip-Error/Wip'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
      
        <Route path='/' element={<NavBar/>}>
           <Route index element={<ItemListContainer/>}/>
           <Route path='/category/:categoryId' element={ <ItemListContainer/>}/>
           <Route path='/item/:Id' element={<ItemDetailContainer/>}/>
           <Route path='/cart' element={<ItemListContainer/>}></Route>
        </Route>
      
        <Route path='Wip' element={<Wip/>}/>
        <Route path='*' element={<Error/>}/>
      
      </Routes>
    </BrowserRouter>
  )
}

export default App;





