import style from './Nav.module.css'

import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch }) => {

    return (
        <nav className={style.Busqueda} >
            <SearchBar onSearch={onSearch}/>

            <div className={style.Botones}>
            <button className={style.Boton}>
                <Link to='/about' >ABOUT</Link>
            </button>

            <button className={style.Boton}>
                <Link to='/home' >HOME</Link>
            </button>
            </div>
        </nav>
    )
}

export default Nav;