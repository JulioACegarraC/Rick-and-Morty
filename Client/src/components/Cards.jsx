import Card from './Card';

export default function Cards(props) {
   return (
      <div style={{display: 'flex',justifyContent:'space-between' , border: "5px solid green"} }>
         {props.characters?.map(per => 
            <Card  
               id={per.id}
               key={per.id} 
               name={per.name}
               status={per.status}
               species={per.species}
               gender={per.gender}
               originName={per.origin?.name}
               locationName={per.location?.name}
               image={per.image}
               onClose={() => props.onClose(per.id)} 
            />
         )}  
      </div>
   );
}