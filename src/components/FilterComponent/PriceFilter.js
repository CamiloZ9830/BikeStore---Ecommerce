import React, { useState } from "react";


function PriceFilter({productos, handle}) {
     
const [price, setPrice] = useState({min: 45, max: 1000})
const [products, setProducts] = useState(productos)

const {min, max} = price

const handlePriceFilter = (e) => {
    e.preventDefault();
    
    setPrice(price => {
        return {...price, [e.target.placeholder]: parseInt(e.target.value)};
    });


};

const submitPrice = (min, max) => {
     console.log(min, max);
     console.log(productos.map(prices =>  {return prices.precio}));
     const filterPrice = products.filter((prod) => prod.precio >= min && 
        prod.precio <= max)
        setProducts(filterPrice);
        

};






    return (
            
        <div className="filter-bar">
            <h5>Buscar por Precios</h5>
            <div className="price">
                <span>Min</span>
                <input type="number" placeholder="min" className="input-min" onChange={handlePriceFilter}/>
                 <span>Max</span>
                <input type="number" placeholder="max"  className="input-max" onChange={handlePriceFilter}/>                
                 <button onClick={() => [submitPrice(min, max), handle(products)] }>search</button>
                
            </div>
            
        </div>
         

    )



};




export default PriceFilter