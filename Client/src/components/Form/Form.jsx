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

    return (
        <div className={style.Principal}>
            <div className={style.Formulario}>
                <span className={style.BorderLine}></span>
                <form onSubmit={handleSubmit}>
                    <h2>Inicio de seccion</h2>
                    <div className={style.InputBox}>
                        <input
                            className={style.Input}
                            type="email" name='email'
                            value={userData.email}
                            onChange={handleChange}
                        // autoComplete='off'
                        />
                        <span htmlFor="email">Email: </span>
                        <i></i>
                        {errors.email && <p style={{ color: "white" }} >{errors.email}</p>}
                    </div>
                    <div className={style.InputBox}>
                        <input className={style.Input} type="text" name="password" value={userData.password} onChange={handleChange} />
                        <span htmlFor="password">Password: </span>
                        <i></i>
                        {errors.password && <p style={{ color: "white" }}>{errors.password}</p>}
                    </div>
                    <div className={style.InputBox}>
                        <button className={style.Boton} >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span> Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;