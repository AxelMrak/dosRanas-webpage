import { configureStore } from '@reduxjs/toolkit';
import artistsReducer from '../redux/slices/sliceArtists';
import cartReducer from '../redux/slices/sliceCart'

export const store = configureStore({
    // Reducer asignado a estado definido
    reducer: {
        artists: artistsReducer,
        cart: cartReducer
    },
});