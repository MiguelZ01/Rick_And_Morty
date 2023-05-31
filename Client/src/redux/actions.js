import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";
import axios from "axios";

export const addFav = (character) => {
   const endpoint = "http://localhost:3001/rickandmorty/fav";
   return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character);
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (error) {
         throw new Error(error.message);
      }
   };
};

export const removeFav = (id) => {
   const endpoint = "rickandmorty/fav/" + id;
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(endpoint);
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      } catch (error) {
         throw new Error(error.message);
      }
   };
};

export const filterCards = (gender) => {
   return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
   return { type: ORDER, payload: order };
};
