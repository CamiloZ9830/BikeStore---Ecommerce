import './Styles.css';
import Item from './Item';






function ItemList ({productos}) {
  
  

   return ( 
        <div className="shop">
        {productos.map ((producto) => {
        return <Item  key={producto.id} {...producto} ></Item>;
        })}
        </div>
  ); 
};

 
export default ItemList

