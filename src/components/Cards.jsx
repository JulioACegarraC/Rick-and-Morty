import Card from './Card';

export default function Cards(props) {
   return (
      <div style={{display: 'flex',justifyContent:'space-between'}}>
         {props.characters.map(per => 
            <Card  
               key={per.id} 
               name={per.name}
               status={per.status}
               species={per.species}
               gender={per.gender}
               originName={per.origin.name}
               originUrl={per.origin.url}
               image={per.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}/>
         )}  
      </div>
   );
}