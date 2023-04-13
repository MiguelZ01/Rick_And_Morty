import style from '../Card/Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';

function Card({ id, name, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id)
      }else{
         setIsFav(true);
         addFav({ id, name, species, gender, origin, image, addFav, removeFav, myFavorites })
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id, myFavorites]);

   return (
      <div className={style.Card}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

         <button className={style.onClose} onClick={() => {onClose(id)}}>X</button>

         <Link to={`/detail/${id}`} className={style.Nombre}>
            <h2 className="card-name">{name}</h2>
         </Link>

         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character)=> {dispatch(addFav(character))},
      removeFav: (id)=> {dispatch(removeFav(id))}
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);