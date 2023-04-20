import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import axios from 'axios';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

function App() {

   // Hooks
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   const { pathname } = useLocation();
   
   // Usuario 
   const EMAIL = 'jmzul@gmail.com';
   const PASSWORD = 'zul123';

   
   // Eventos
   function login (userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }else {
         alert('Datos de usuario incorrectos')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== (id))
      setCharacters(charactersFiltered)
   }

   // Renderizacion.
   return (
      <div>
         {pathname !== '/' && <Nav onSearch={onSearch} />}
      
         <Routes>
            <Route path='/' element={<Form Login={login}/>} />
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> }/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
        
      </div>
   );
}

export default App;
