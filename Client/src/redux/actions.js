import {ADD_FAV,REMOVE_FAV,FILTER,ORDER} from './types';
import axios from "axios";

export const addFav = (character) => {
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return async (dispatch) => {
            try {
                const response = await axios.post(endpoint, character)
                const { data } = response;
                return dispatch({
                  type: 'ADD_FAV',
                  payload: data,
                });
            } catch (error) {
                return dispatch({
                    type: "ERROR",
                    payload: error
                })
            }
        };
};
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async (dispatch) => {
    try {   
        const response = await axios.delete(endpoint) 
        const { data } = response
        return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
        })
    } catch (error) {
        return dispatch({
            type: "ERROR",
            payload: error
        })
    }  
   };

    // return {
    //     type: REMOVE_FAV,
    //     payload: id
    // }
};
export const filterCards = (gender) => {
    return{
        type: FILTER,
        payload: gender
    }
}
export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}
