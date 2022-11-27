import React, { useEffect, useState } from "react";
import '../Styles.css';


function PriceFilter({productos, handle}) {
     
const [price, setPrice] = useState({min: 45, max: 1000})
const [products, setProducts] = useState(productos)
const [dis, setDis] = useState("disabled")

const {min, max} = price

const handlePriceFilter = (e) => {
    e.preventDefault();
    
    setPrice(price => {
        return {...price, [e.target.placeholder]: parseInt(e.target.value)};
    });
    


};

useEffect(() => {
    
    if(min >= 1 && min <= 899 && max >= 46 && max <= 1000 && max >=
         min) {
        
        console.log(min, max);
        console.log(productos.map(prices =>  {return prices.precio}));
        const filterPrice = productos.filter((prod) => prod.precio >= min && 
           prod.precio <= max)
           setProducts(filterPrice);
           setDis("")
      
    
    } 
    else {
        setDis("disabled")
    }

        
   
   
}, [min, max, productos])








    return (
            
        <div className="filter-bar">
            <h5>Buscar por Precios</h5>
            <div className="price">
                <span>Min</span>
                <input type="number" placeholder="min" className="input-min" onChange={handlePriceFilter}/>
                 <span>Max</span>
                <input type="number" placeholder="max"  className="input-max"  onChange={handlePriceFilter}/>                
                 <button disabled={dis}  onClick={() => handle(products) }>search</button>
                
            </div>
            
        </div>
         

    )



};




export default PriceFilter