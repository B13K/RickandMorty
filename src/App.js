
import style from './App.module.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'

import React from 'react'

function App () {

  const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 };
  
  let [characters, setCharacters] = React.useState([])


  // const onSearch = (character) => {
  //   console.log(character)
  //   setCharacters(characters.concat(example))
  // }

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const onClose = (id) => {
    console.log(id)
    setCharacters((oldChars) => oldChars.filter(c => c.id !== id))
  }



  return (
    <div className={style.main}>
      <Nav onSearch={onSearch}/>
      <Cards
        characters={characters} onClose={onClose}
      />
    </div>
  )
}

export default App
