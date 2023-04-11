import style from './Search.module.css'

import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('');

   const handleChange = (event) => {
         setId(event.target.value)
   }

   return (
      <div className={style.SearchBar} >
         <input className={style.input} type='search' onChange = {handleChange} value = {id}/>
         <button className={style.boton} onClick={() => {onSearch(id); setId('')}}>Agregar</button>

      </div>
   );
}
