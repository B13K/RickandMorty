import React, { useEffect } from 'react';
import style from './App.module.css'
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Form from './components/Form/Form'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About'
import Detail from './components/Detail/Detail.jsx'
import Error from './components/Error/Error'
import Favorites from './components/Favorites/Favorites.js'


function App () {

  let { pathname } = useLocation();  
  let [characters, setCharacters] = React.useState([])
  let navigate = useNavigate();
  let [ access, setAccess] = React.useState(false)
  let username = 'jonathan_3_7@hotmail.com'
  let password = '123456789'


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
    setCharacters((oldChars) => oldChars.filter(c => c.id !== id))
  }

  function login(userData){
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home');
    }
  }

  function logout(){
    setAccess(false);
    navigate('/')
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access])


  return (
    <div className={style.main}>
      {pathname==='/'? null : <Nav onSearch={onSearch} logout={logout}/>}
      <Routes>
        <Route path='/' element={<Form  login={login}/>} />
        <Route path='/home' element={<Cards 
        characters={characters} onClose={onClose}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
