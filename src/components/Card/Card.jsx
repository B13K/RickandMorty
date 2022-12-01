//import styled from 'styled-components'
import styles from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {

   let detailId = props.id;


   return (
      <div className={styles.card}>
         <div className={styles.buttonClass}>      
            <button onClick={props.onClose}>X</button>
         </div>
         <div className={styles.imgClass}>
            <img  src={props.image} alt="" />
            <Link to={`/detail/${detailId}`}>
               <h2>{props.name}</h2>
            </Link>
         </div>
         <div className={styles.nameClass}>
            <h2>{props.gender}</h2>
            <h2>{props.species}</h2>
         </div>
      </div>
   );
}
