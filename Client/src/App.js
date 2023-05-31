import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import axios from "axios";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
axios.defaults.baseURL = "https://rick-and-morty-yx73.vercel.app";

function App() {
   // Hooks
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   const { pathname } = useLocation();

   // Usuario
   const EMAIL = "jmzul@gmail.com";
   const PASSWORD = "zul123";

   // Eventos
   const login = async (userData) => {
      const URL = "rickandmorty/login/";

      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`);
         const { access } = data;
         setAccess(data);
         access && navigate("/home");
      } catch {
         alert("Datos incorrectos.");
      }
   };

   useEffect(() => {
      !access && navigate("/");
   }, [access, navigate]);

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`rickandmorty/character/${id}`);

         setCharacters((oldChars) => [...oldChars, data]);
      } catch (error) {
         window.alert("¡No hay personajes con este ID!");
      }
   };

   const onClose = (id) => {
      const charactersFiltered = characters.filter((character) => character.id !== id);
      setCharacters(charactersFiltered);
   };

   // Renderizacion.
   return (
      <div>
         {pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess} />}

         <Routes>
            <Route path="/" element={<Form Login={login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;
