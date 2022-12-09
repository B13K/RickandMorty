import { ADD_CHARACTER,
         DELETE_CHARACTER,         
         ADD_FAVORITE,
         DELETE_FAVORITE,
         FILTER,
         ORDER,
        } from "./types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case ADD_FAVORITE:
            return ({
                ...state,
                allCharacters: [...state.allCharacters, action.payload],
                myFavorites: [...state.allCharacters, action.payload]
            });
        case DELETE_FAVORITE:
            return({
                ...state,
                myFavorites: [...state.myFavorites.filter(e => e.id !== action.payload)]
            });
        case FILTER:
            return ({
                ...state,
                myFavorites: state.allCharacters.filter(c => c.gender === action.payload)
                // myFavorites: [...state.allCharacters]
            });
        case ORDER:
            return ({
                ...state,
                myFavorites: state.allCharacters.sort((a,b) => {
                    if(action.payload === 'Ascendente'){
                        return a.id-b.id
                    }
                    else{
                        return b.id-a.id
                    }
                })
            })
    }
}