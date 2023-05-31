import { Link } from "react-router-dom";
import styles from "./Card.module.css"
import { addFav,removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

export function Card(props) {
   let[isFav,setIsFav] = useState (false);
   
   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
      }, [props.myFavorites]);

   function handleFavorite () {
      if (isFav) {
         setIsFav (false);
         props.removeFav(props.id)
   } else {
         setIsFav (true);
         props.addFav(props)
   }
}

   return (
      <div className={styles.DivCard}>
         <div className={styles.DivCardButton}>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
           <button onClick={handleFavorite}>🤍</button>
            )
         }     
            <button onClick={props.onClose}>X</button>
         </div>
         <Link to = {`/detail/${props.id}`}>
            <div className={styles.DivCardTitles}>
                  <h2>{props.name}</h2> 
                  <h4>{props.id}</h4>
                  <h4>{props.status}</h4>
                  <h4>{props.species}</h4>
                  <h4>{props.gender}</h4>
            </div>
            <img className={styles.ImgCard} src={props.image} alt='' />
         </Link>
      </div>
   )

};

const mapStateToProps = (state) => {
   return {
       myFavorites: state.myFavorites
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (personaje)=> dispatch(addFav(personaje)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}
export default connect (mapStateToProps, mapDispatchToProps)(Card);