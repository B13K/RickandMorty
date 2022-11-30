import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;
   return <div className={styles.container}>
      {
         characters.map((c, index) => <Card key={index}
            name={c.name}
            species={c.species}
            gender={c.gender}
            image={c.image}
            onClose={() => onClose(c.id)}        
         
         />)
      }
   </div>;
}
