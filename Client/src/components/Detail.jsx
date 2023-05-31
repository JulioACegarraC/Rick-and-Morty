import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//import styles from "./Card.module.css"
export default function Detail(props) {
   let {id} = useParams();
   let [character,setCharacter] = useState({});
   useEffect(() => {
      //axios(`https://rickandmortyapi.com/api/character/${id}`)
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         console.log(data)
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      
      return setCharacter({});
   }, [id]);



    return (
       <div>
         <h1>Name: {character.name}</h1>
         <h2>Status: {character.status}</h2>
         <h3>Species: {character.species}</h3>
         <h3>Gender: {character.gender}</h3>
         <h3>Origin: {character.origin?character.origin.name:null}</h3>
         <h3>Location: {character.location?character.location.name:null}</h3>
         <img src={character.image} alt={character.name} />
      </div>
    );
 }