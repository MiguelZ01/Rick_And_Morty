import style from '../Card/Card.module.css'

import { Link } from 'react-router-dom';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.Card}>
         <button className={style.onClose} onClick={() => onClose(id)}>X</button>

         <Link to={`/detail/${id}`} className={style.Nombre}>
            <h2 className="card-name">{name}</h2>
         </Link>

         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}
