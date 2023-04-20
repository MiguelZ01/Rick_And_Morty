import style from './Nav.module.css'

import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch }) => {

    return (
        <nav className={style.Busqueda} >
            <SearchBar onSearch={onSearch} className={style.SearchBar}/>

            <div className={style.Botones}>

            <Link to='/about' className={style.Boton}>
                <i></i><i></i>
                <button>
                    About
                </button>
            </Link>

            <Link to='/home' className={style.Boton}>
                <i></i><i></i>
                <button>
                    Home
                </button>
            </Link>
            
            <Link to='/favorites' className={style.Boton}>
                <i></i><i></i>
                <button>
                    Favorites
                </button>
            </Link>
            </div>
        </nav>
    )
}


export default Nav;