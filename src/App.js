
import style from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About'
import Detail from './components/Detail/Detail.jsx'
import Error from './components/Error/Error'

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
    let isCharacter = characters.filter(c => c.id === parseInt(character))
    
    if(isCharacter.length)
    {
      window.alert(`Ya hay un personaje con ese Id: ${character}`)
    }
    else{
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
    
  }

  const onClose = (id) => {
    console.log(id)
    setCharacters((oldChars) => oldChars.filter(c => c.id !== id))
  }



  return (
    <div className={style.main}>
      <Nav onSearch={onSearch}/>
      <Routes>
        <Route path='/' element={<Cards 
        characters={characters} onClose={onClose}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
