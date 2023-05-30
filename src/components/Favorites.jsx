import Card from './Card';
import { connect } from "react-redux";
import { filterCards , orderCards } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
export function Favorites(props) {
   let [aux,setAux] = useState(false);
   const dispatch = useDispatch();
   
   const handleOrder = (evento) => {
      dispatch(orderCards(evento.target.value))
      if (aux === false) setAux(true);
      else setAux(false);
   }
   const  handleFilter = (evento) => {
      dispatch(filterCards(evento.target.value))
   }
   
   
   return (
      <div > 
      <select onChange={handleOrder}>
         <option value="A">Ascendent</option>
         <option value="D">Descendent</option>
      </select>
      <select onChange={handleFilter}>
         <option value="All">All</option>
         <option value="Male">Male</option>
         <option value="Female">Female</option>
         <option value="Genderless">Genderless</option>
         <option value="unknown">unknown</option>
      </select>
      <div style={{display: 'flex',justifyContent:'space-between' , border: "5px solid green"} }>
      {props.myFavorites.map( (e) => 
         <Card 
         key={e.id}
         id={e.id}
         name={e.name}
         status={e.status}
         species={e.species}
         gender={e.gender}
         image={e.image}
         originName={e.origin}
         onClose={() => props.onClose(e.id)}
         />)}
         </div> 
      </div>
   )
}
const mapStateToProps = (state) => {
   console.log(state.myFavorites);
   return {
        myFavorites: state.myFavorites
    }
 }
 export default connect (mapStateToProps, null)(Favorites);