
import React, { useState, createContext } from "react";

export const CartContext = createContext([]);

export function CartProvider({children}) {
      const [items, setItems] = useState([]);
      
      const inCart = (id) => {
              const confirmar = items.find((articulo) => articulo.id === id);
              return confirmar;
      };

      const addItem = (item, quantity) => {

            inCart(item.id) ?

            setItems(items.map((articulo) => {
                   if (articulo.id === item.id) {
                         articulo.cantidad += quantity
                         
                   }
                   
                  return articulo
            }))
             
            :
            
             setItems([...items,{...item, cantidad: quantity}]);
              
      };

      const removeItem = (id) => {
            const remove = items.filter((articulo) => articulo.id !== id)
            return ( setItems(remove));
           
      };

      const removeAll = () => {
            setItems([]);
      };

     
       const valorTotal = items.map((articulo) => {
                  const {cantidad, precio} = articulo;
                  return precio * cantidad})
                  .reduce((value1, value2) => value1 + value2, 0 );
      
      
      const cantidadTotal = items.map((articulo) =>  articulo.cantidad).reduce((value1, value2) => value1 + value2, 0);
      
      return (
            <CartContext.Provider value={{items, valorTotal, cantidadTotal, addItem, removeItem, removeAll}}>
                  {children}
            </CartContext.Provider>
         )
      
     
}; 