import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './../SearchBar/SearchBar.jsx'
import styles from './Nav.module.css'

function Nav(props){  
    return (
        <div className={styles.header}>   
            <div className={styles.link}>
                <button onClick={props.logout} className={styles.button}>Logout</button>
                <Link to='/home'>
                    <p>Home</p>
                </Link>
                <Link to='/favorites'>
                    <p>favorites</p>
                </Link>
                <Link to='/about'>
                    <p>About</p>
                </Link>
            </div>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}

export default Nav