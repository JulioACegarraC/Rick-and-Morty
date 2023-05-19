import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar';
// import Nav from './components/Nav';
import characters, { Rick } from './data.js';
function App() {
   return (
      <div className='App' style={{padding:"25px"}}>
         {/* <Nav /> */}
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         {/* <div>
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
            <Cards characters={characters} />
            <hr />
         </div>
      </div>
   );
}

export default App;