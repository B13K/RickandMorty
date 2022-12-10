import React from "react";
import styles from './Form.module.css'


const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,10})/;
export function validate(errors){
    const error = {}
    if(!(regexEmail.test(errors.username))){
        error.username = 'Por favor colocar un email valido';
    }

    if(!(regexPassword.test(errors.password))){
        error.password = 'Password debe tener entre 6 y 10 caracteres'
    }
    return error
}


function Form(props){


    const [userData, setUserData] = React.useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = React.useState({
        username: '',
        password: ''
    })


    function handleInputChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...userData,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(){
        props.login(userData)
    }

    return (
        <div className={styles.containerForm}>
            <form onSubmit={handleSubmit}>
                <div className={styles.login}>                    
                    <label>Username:</label>
                    <input
                        type='text'
                        value={userData.username}
                        name='username'
                        onChange={handleInputChange}
                    />               
                    {!errors.username ? null : <p className={styles.warning}>{errors.username}</p>}
                </div> 
                <div className={styles.login}>
                    <label>Password:</label>
                    <input 
                        type='password'
                        value={userData.password}
                        name='password'
                        onChange={handleInputChange}
                    />
                    {!errors.password ? null : <p className={styles.warning}>{errors.password}</p>}
                </div>
                <button type='submit'>LOGIN</button>
            </form>
        </div>
    )
}


export default Form;