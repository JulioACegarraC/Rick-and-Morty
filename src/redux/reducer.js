import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./types";
//import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters:[]
}
export default function rootReducer ( state = initialState, {type,payload}) {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allCharacters: [...state.myFavorites, payload]
            }
        case REMOVE_FAV:
            const filtered = state.myFavorites.filter(
                fav => fav.id !== payload
                )
            return {
                ...state,
                myFavorites: filtered
            }
        case FILTER:
            let filteredF = [];
            if (payload !== 'All'){
                filteredF = state.allCharacters.filter(
                    char => char.gender === payload
                )
                return {
                    ...state,
                    myFavorites: filteredF
                }
            }
            else return {
                ...state,
                myFavorites: state.allCharacters
            }; 
        case ORDER:
            let order =[]
            if (payload === 'A'){
                order = state.allCharacters.sort((a,b) => a.id - b.id); 
            }
            else if (payload === 'D'){
                order = state.allCharacters.sort((a,b) => b.id - a.id); 
                }
            return {
                    ...state,
                    myFavorites: order
                }
        default:
            return { ...state }
    }
}