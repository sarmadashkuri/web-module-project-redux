import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions";

const initialState = {
    favorites: [],
    displayFavorites: true,
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITE:
            const existingFavorite = state.favorites.find((movie) => movie.id === action.payload.id);
            if (existingFavorite) {
                return state;
            } else {
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload],
                };
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(movie => movie.id !== action.payload)
            }
        default:
            return state;
    }
}

export default favoritesReducer;