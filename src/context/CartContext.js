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
                         alert(`Agregaste ${quantity} productos a la canasta`)
                   }
                   
                  return articulo
            }))
             
            :
            
             setItems([{...item, cantidad: quantity}], alert(`Agregaste ${quantity} productos a la canasta`))
              
      };

      const removeItem = (id) => {
            const remove = items.filter((articulo) => articulo.id !== id)
            return ( setItems(remove));
           
      };

      const removeAll = () => {
            setItems([]);
      };

         return (
            <CartContext.Provider value={{items, addItem, removeItem, removeAll}}>
                  {children}
            </CartContext.Provider>
         )
      
     
}; 