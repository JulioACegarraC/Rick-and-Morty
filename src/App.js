import './App.css';
//import axios from 'axios';
//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
//import SearchBar from './components/SearchBar';
import Nav from './components/Nav';
//!Acabo de quitarle la importacion de la prop characters [ {pers 1} , {pers 2} ... {pers n}]
// import characters from './data.js';
import React, {useState} from 'react';
function App() {
   const [characters,setCharacters] = useState([]); 

   function onSearch(id) {
      let arrayIds = characters.map(ele => ele.id)
      console.log(arrayIds[0]);//number
      console.log(parseInt(id));//number
      console.log((!arrayIds.includes(parseInt(id))))
      if (!arrayIds.includes(parseInt(id))){
         fetch(`https://rickandmortyapi.com/api/character/${id}`)
         .then((response) => response.json())
         .then(( data ) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No has ingresado ningun ID!');
            }
         });
      } else {
         window.alert('¡Este personaje ya ha sido agregado!');
      }
   }
   const onClose = (id) =>{
      setCharacters(characters.filter(char => char.id !== id));
   }
   const onRandom = (random) =>{
      let id = Math.ceil(Math.random()* random);
      if (id === 0) id = 1;
      let arrayIds = characters.map(ele => ele.id)
      console.log(arrayIds[0]);//number
      console.log(parseInt(id));//number
      console.log((!arrayIds.includes(parseInt(id))))
      if (!arrayIds.includes(parseInt(id))){
         fetch(`https://rickandmortyapi.com/api/character/${id}`)
         .then((response) => response.json())
         .then(( data ) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No has ingresado ningun ID!');
            }
         });
      } else {
         window.alert('¡Este personaje ya ha sido agregado!');
      }
   }

   return (
      <div className='App' style={{padding:"25px"}}>
         <Nav onSearch={onSearch} onRandom={onRandom} />
         {/*<SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <div>
            <Card
               id={Rick.id} 
               name={Rick.name}
               status={Rick.status}
               species={Rick.species}
               gender={Rick.gender}
               originName={Rick.origin.name}
               originUrl={Rick.origin.url}
               image={Rick.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />
         </div> 
         */}
            <hr />
         <div>
            <Cards characters={characters} onClose={onClose} />
            <hr />
         </div>
      </div>
   );
}

export default App;