//import styled from 'styled-components'
import styles from './Card.module.css'

export default function Card(props) {
   return (
      <div className={styles.card}>
         <div className={styles.buttonClass}>      
            <button onClick={props.onClose}>X</button>
         </div>
         <div className={styles.imgClass}>
            <img  src={props.image} alt="" />
            <h2>{props.name}</h2>
         </div>
         <div className={styles.nameClass}>
            <h2>{props.gender}</h2>
            <h2>{props.species}</h2>
         </div>
      </div>
   );
}
