//import './App.css'
// import styled from 'styled-components'
import style from './App.module.css'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters, { Rick } from './data.js'

// const DivTemplate = styled.div`
//   text-align: center;
//   padding: 25px;
// `

function App () {
  return (
    <div className={style.main}>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      <hr />
      <Cards
        characters={characters}
      />
      <hr />
      <SearchBar
        onSearch={(characterID) => window.alert(characterID)}
      />
    </div>
  )
}

export default App
