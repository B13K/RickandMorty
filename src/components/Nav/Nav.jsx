import React from 'react'
import SearchBar from './../SearchBar/SearchBar.jsx'
import styles from './Nav.module.css'

function Nav(props){
    

    return (
        <div className={styles.header}>            
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}

export default Nav