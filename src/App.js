import './App.css';
import About from './components/About';
import Error from './components/Error';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import React, {useState} from 'react';
import { Routes,Route } from 'react-router-dom';
import Detail from './components/Detail';
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
      <div>
         <Nav onSearch={onSearch} onRandom={onRandom} />
         <Routes>
            <Route path='/' element = {<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element= {<About />}/>
            <Route path='/detail/:id' element= {<Detail />}/>
            <Route path='*' element= {<Error />}/>

         </Routes>
      </div>
   );
}

export default App;