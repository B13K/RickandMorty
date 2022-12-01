import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './../SearchBar/SearchBar.jsx'
import styles from './Nav.module.css'

function Nav(props){  
    return (
        <div className={styles.header}>   
            <div className={styles.link}>
                <Link to='/about'>
                    <p>About</p>
                </Link>
                <Link to='/'>
                    <p>Home</p>
                </Link>
            </div>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}

export default Nav