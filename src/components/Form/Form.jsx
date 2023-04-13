import style from './Form.module.css'

import { useState } from "react";
import validation from "./validation";

const Form = ({ Login }) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        Login(userData);
    }

    return(
        <div className={style.Formulario}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" style={{ color: "white"}}>Email: </label>
                <input className={style.Input} type="email" name='email' value={userData.email} onChange={handleChange}/>
                {errors.email && <p style={{ color: "red"}}>{errors.email}</p>}
                <hr />
                <label htmlFor="password" style={{ color: "white"}}>Password: </label>
                <input className={style.Input} type="text" name="password" value={userData.password} onChange={handleChange}/>
                {errors.password && <p style={{ color: "red"}}>{errors.password}</p>}

                <button className={style.Boton} >Submit</button>
            </form>
        </div>
        )
}

export default Form;