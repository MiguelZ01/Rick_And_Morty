import style from "./Detail.module.css";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.Principal}>
      <div className={style.Box}>
        <div>
          <img className={style.Img} src={character?.image} alt={character?.name} />
        </div>
        <div className={style.Content}>
          <h2>{character?.name}</h2>
          <h2>{character?.status}</h2>
          <h2>{character?.species}</h2>
          <h2>{character?.gender}</h2>
          <h2>{character?.origin?.name}</h2>
        </div>
        <div className={style.Glass}></div>
      </div>
    </div>
  );
};

export default Detail;
