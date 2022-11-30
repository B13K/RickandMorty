import styles from './SearchBar.module.css'
import React from 'react'

export default function SearchBar(props) {

   let [name, setName] = React.useState('')

   // const onChange = (event) => {
   //    setName((prevState) => prevState=event.target.value)
   //    console.log(name)
   // }

   const onChange = (event) => {
      setName(name = event.target.value);
   }

   return (
      <div className={styles.container}>
         <input type='search' onChange={onChange}/>
         <button onClick={() => props.onSearch(name)}>Agregar</button>
      </div>
   );
}
