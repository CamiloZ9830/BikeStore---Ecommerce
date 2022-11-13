import React, { useState} from "react";




function SearchBar({filter}) {
    
    
      const [search, setSearch] = useState(""); 
     
      
      const handleSearch = (e) => {
          
          e.preventDefault()
          
          setSearch(e.target.value.toLowerCase());
          
          };
        
    
    
      return (
        <>
        <input type="text" placeholder="Search..." 
        className="search" onChange={handleSearch} onKeyUp={() => filter(search)}/>
        <h1>{search}</h1>
        </>
        
        )

};




export default SearchBar

