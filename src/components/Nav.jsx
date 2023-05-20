import React from "react";
import styles from "./Nav.module.css"
import SearchBar from "./SearchBar"
export default function Nav(props) {
    return (
       <div className={styles.Container}>
         <button onClick={() => props.onRandom(826)}>Personaje Aleatorio</button>
         <SearchBar onSearch= {props.onSearch}/>
       </div>
    );
 }