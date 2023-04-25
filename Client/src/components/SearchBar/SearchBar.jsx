import style from './Search.module.css'

import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('');

   const handleChange = (event) => {
         setId(event.target.value)
   }
   
   const randomizer = () => {
      const randomId = (Math.floor(Math.random() * 826) + 1).toString();
      setId(randomId);
      onSearch(randomId);
      setId("");
    };

   return (
      <div className={style.SearchBar} >
         <input className={style.input} type='search' onChange = {handleChange} value = {id}/>
         <div className={style.Boton}>
            <i></i><i></i>
            <button onClick={() => {onSearch(id); setId('')}}>
            Include
            </button>
         </div>
         <div className={style.Boton}>
         <i></i><i></i>
         <button className="btn-random" onClick={() => {randomizer(); }}>
          Randomizer
         </button>
         </div>
      </div>
   );
}
