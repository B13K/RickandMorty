//import styled from 'styled-components'
import React, {useEffect} from 'react';
import styles from './Card.module.css'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
//Import actions
import {addFavorite, deleteFavorite } from '../../redux/actions.js'

function Card(props) {

   let [isFav, setIsFav] = React.useState(false)

   let detailId = props.id;

   useEffect(() => {      
      // props.myFavorites?.forEach((fav) => {
      //    if (fav.id === props.id) {
      //       setIsFav(true);
      //    }
      // });
      for(let i = 0; i< props.myFavorites?.length; i++){
         if(props.myFavorites[i].id === props.id){
            setIsFav(true)
         }
      }
   }, [props.myFavorites])


   function handleFavorite(){
      if(isFav){         
         props.deleteFavorite(props.id)
         setIsFav( isFav = false )
      }
      else{
         props.addFavorite(props)
         setIsFav( isFav = true )
      }
   }


   return (
      
      <div className={styles.card}>
         <div className={styles.buttonClass}>  
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }    
            <button onClick={props.onClose} className={styles.buttonClose}>X</button>
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


export function mapStateToProps(state){
   return {
      myFavorites: state?.myFavorites
   }
}

export function mapDispatchToProps(dispatch){
   return {
      addFavorite: (character) => dispatch(addFavorite(character)),
      deleteFavorite: (id) => dispatch(deleteFavorite(id))
      }
}



export default connect(mapStateToProps, mapDispatchToProps)(Card);