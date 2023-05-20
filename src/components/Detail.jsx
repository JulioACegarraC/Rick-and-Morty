import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//import styles from "./Card.module.css"
export default function Detail(props) {
   let {id} = useParams();
   let [character,setCharacter] = useState({});
   useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
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
         <img src={character.image} alt={character.name} />
      </div>
    );
 }
//  {"id":34,"name":"Benjamin","status":"Alive","species":"Poopybutthole","type":"","gender":"Male","origin":{"name":"unknown","url":},"location":{"name":"Interdimensional Cable","url":"https://rickandmortyapi.com/api/location/6"},"image":"https://rickandmortyapi.com/api/character/avatar/34.jpeg","episode":["https://rickandmortyapi.com/api/episode/8","https://rickandmortyapi.com/api/episode/13","https://rickandmortyapi.com/api/episode/17"],"url":"https://rickandmortyapi.com/api/character/34","created":"2017-11-05T09:24:04.748Z"}