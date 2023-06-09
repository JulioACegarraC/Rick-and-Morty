import './App.css';
import About from './components/About';
import Error from './components/Error';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import React, {useState,useEffect} from 'react';
import { Routes,Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';
import { connect } from 'react-redux';
import { removeFav } from './redux/actions';
import axios from 'axios';
function App(props) {
   const [characters,setCharacters] = useState([]);
   const [access,setAccess] = useState(false);
   //const EMAIL = "homerosimpson@gmail.com";
   //const PASSWORD = "123456";
   const navigate = useNavigate();
 
   function onSearch(id) {
      let arrayIds = characters.map(ele => ele.id)
      if (!arrayIds.includes(parseInt(id))){
         //fetch(`https://rickandmortyapi.com/api/character/${id}`)
         fetch(`http://localhost:3001/rickandmorty/character/${id}`)
         //.then((response) => response.json())
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
      props.myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            props.removeFav(id);
         }
      });
   }
   const onRandom = (random) =>{
      let id = Math.ceil(Math.random()* random);
      if (id === 0) id = 1;
      let arrayIds = characters.map(ele => ele.id)
      if (!arrayIds.includes(parseInt(id))){

         fetch(`http://localhost:3001/rickandmorty/character/${id}`)
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
   function login (userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios( `http://localhost:3001/rickandmorty/login/?email=${email}&password=${password}`)
         .then(({ data }) => {
            const { access } = data;
            setAccess(data);
            access && navigate('/home');
         });
   }
   const location = useLocation().pathname;
   function logOut () {
      setAccess(false);
   }
   useEffect(() => {!access && navigate('/')},[access]);
   return (
      <div>
         {location !== '/'? <Nav onSearch={onSearch} onRandom={onRandom} logOut={logOut}/>:null}
         <Routes>
            <Route exact path='/' element = {<Form login={login} />} />
            <Route path='/home' element = {<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element= {<About />}/>
            <Route path='/favorites' element= {<Favorites onClose={onClose}/>}/>
            <Route path='/detail/:id' element= {<Detail />}/>
            <Route path='*' element= {<Error access={access} setAccess={setAccess}/>}/>
         </Routes>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
       myFavorites: state.myFavorites
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      removeFav: (id) => dispatch(removeFav(id))
   }
}
export default connect (mapStateToProps, mapDispatchToProps)(App);