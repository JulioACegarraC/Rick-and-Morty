import styles from "./SearchBar.module.css"
export default function SearchBar(props) {
   return (
      <div className={styles.DivSearchBar}>
         <input type='search' />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
