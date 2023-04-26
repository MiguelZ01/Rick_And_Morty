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
      <div className={style.Principal}>
         <div className={style.Card}>
            
            <div className={style.ImgBx}>
               <img src={image} alt='' />
            </div>

         <div className={style.Content} >

         <Link to={`/detail/${id}`} className={style.Nombre}>
               <h2 >{name} </h2>
               <h2>{id}</h2>
         </Link>

         <div className={style.Botones} >
         {
            isFav ? (
               <div className={style.Boton}>
                  <i></i><i></i>
                  <button onClick={handleFavorite} className={style.Favoritos}>❤️</button>
               </div>
            ) : (
               <div className={style.Boton}>
                  <i></i><i></i>
                  <button onClick={handleFavorite} className={style.Favoritos}>🤍</button>
               </div>
            )
         }

         <div className={style.Boton}>
            <i></i><i></i>
            <button className={style.onClose} onClick={() => {onClose(id)}}>X</button>
         </div>
         </div>

         </div>
      </div>
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