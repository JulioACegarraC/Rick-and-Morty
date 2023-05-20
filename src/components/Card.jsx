import { Link } from "react-router-dom";
import styles from "./Card.module.css"
export default function Card(props) {
   return (
      <div className={styles.DivCard}>
         <div className={styles.DivCardButton}>
            <button onClick={props.onClose}>X</button>
         </div>
         <Link to = {`/detail/${props.id}`}>
            {console.log(props.id)}
            {console.log(props.status)}
            <div className={styles.DivCardTitles}>
               {/* <h4>{props.id}</h4>  */}
                  <h2>{props.name}</h2> 
                  <h4>{props.status}</h4>
                  <h4>{props.species}</h4>
                  <h4>{props.gender}</h4>
               {/* <h4>{props.origin.name}</h4> */}
               {/* <img src={props.origin.url} alt='' /> */}
            </div>
            <img className={styles.ImgCard} src={props.image} alt='' />
         </Link>
      </div>
   );
}