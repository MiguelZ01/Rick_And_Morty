import style from './Form.module.css'

import validation from "./validation";
import { useState } from "react";

const Form = ({ Login }) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        validation({
            ...userData,
            [event.target.name]: event.target.value},
            errors,
            setErrors
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        Login(userData)
    }

    return (  
            <div className={style.Formulario}>
                <form onSubmit={handleSubmit}>
                <div >
                <label htmlFor="email">Email: </label>
                <input className={style.Input} onChange={handleChange} value={userData.email} name="email" type="email" />
                <p>{errors.email}</p>
                </div>

                <div>
                <label htmlFor="password">Password: </label>
                <input className={style.Input} onChange={handleChange} value={userData.password} name="password" type="text" />
                <p>{errors.password }</p>
                </div>

                <button className={style.Boton}>Submit</button>
            </form>
            </div>
    )
}

export default Form;




