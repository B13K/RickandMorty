import styles from './SearchBar.module.css'
import React from 'react'

export default function SearchBar(props) {

   let [id, setId] = React.useState('')

   // const onChange = (event) => {
   //    setName((prevState) => prevState=event.target.value)
   //    console.log(name)
   // }

   const onChange = (event) => {
      setId(id = event.target.value);
   }


   const onRandom = () => {
      let num = Math.floor(Math.random()*826);
      props.onSearch(num)
   }

   return (
      <div className={styles.containerSearchBar}>   
            <button onClick={onRandom}>Random</button>
            <input type='search' onChange={onChange}/>
            <button onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}
