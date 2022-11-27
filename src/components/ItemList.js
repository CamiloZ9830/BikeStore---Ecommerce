import './Styles.css';
import Item from './Item';
import React, {useState} from 'react';
import SearchBar from './FilterComponent/SearchBar';
import PriceFilter from './FilterComponent/PriceFilter';







function ItemList ({productos}) {

 
  const [filter, setFilter] = useState(productos);
   
   const [buscar, setBuscar] = useState("")
   


const handleFilter = (search) => {
   setBuscar(search)
   
   
 /* const filterItems = productos.filter((products) => 
  products.nombre.toLowerCase().indexof(search) !== -1);
  console.log(filterItems);*/
     
   
      const filterItems = productos.filter( products =>
        products.nombre.toLowerCase().includes(search));
        setFilter(filterItems)
};

const handlePriceFilter = (priceFilter) => {
      setFilter(priceFilter)
      

}
         
;

  
   return (
    
        <div className='grid-content'>
            <div className='filter-flex'>
             <SearchBar filter={handleFilter}/>
             <PriceFilter productos={productos} handle={handlePriceFilter}/>
            </div> 
       
        <div className="shop">
        { 
        filter.length !== 0  ?
         filter.map ((producto) => 
         { return  <Item  key={producto.id} {...producto}></Item> })
         :
        
         <div style={{opacity:'0.79', margin: '315px 0 0 480px', minWidth: '270px', textAlign: 'center' }}>
         <h2 >No se encontraron productos con el nombre: "{buscar.charAt(0).toUpperCase() + buscar.slice(1)}"</h2>       
          </div>        
        
        }

        </div>
         </div>
  ); 
};

 
export default ItemList

