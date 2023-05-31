import { useState } from "react";
import styles from "./SearchBar.module.css"
export default function SearchBar(props) {
   let [id,setId] = useState('');
   const handleChange = (evento) => {
      const value = evento.target.value; 
      setId(id = value);
   };
   return (
      <div className={styles.DivSearchBar}>
         <input id='input' type='search' onChange={handleChange}></input>
         <button onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}
//onchange={handleChange(EventTarget.value)}