import React, {useEffect}from "react";
import { useParams } from 'react-router-dom'
import styles from './Detail.module.css'

function Detail() {

    const { detailId } = useParams();

    const [character, setCharacter] = React.useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);


    return (
        <div className={styles.containerDetail}>
            <div>
                <h1>Nombre: {character.name}</h1>
                <p><strong>Status: </strong> {character.status}</p>
                <p><strong>Especie: </strong> {character.species}</p>
                <p><strong>Genero: </strong> {character.gender}</p>
                <p><strong>Origin: </strong> {character.origin?.name}</p>
            </div>
            <img src={character.image} alt={character.name} />
        </div>
    )
}

export default Detail;