import Card from './Card';

export default function Cards(props) {
   return   <div>
               <ul>
                  {props.characters.map(per => 
                     <li key={per.id}>
                        {console.log(per)}
                        <Card  
                           id={per.id} 
                           name={per.name}
                           status={per.status}
                           species={per.species}
                           gender={per.gender}
                           originName={per.origin.name}
                           originUrl={per.origin.url}
                           image={per.image}
                           onClose={() => window.alert('Emulamos que se cierra la card')}/>
                     </li>
                  )}
               </ul>  
            </div>;
}