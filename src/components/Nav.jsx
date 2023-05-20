import React from "react";
import styles from "./Nav.module.css"
import SearchBar from "./SearchBar"
import { NavLink } from "react-router-dom";
export default function Nav(props) {
    return (
       <div className={styles.Container}>
         <button onClick={() => props.onRandom(826)}>Personaje Aleatorio</button>
         <NavLink to = '/'  >Home</NavLink>
         <NavLink to = '/about'  >About</NavLink>
         <SearchBar onSearch={props.onSearch} />
       </div>
    );
 }