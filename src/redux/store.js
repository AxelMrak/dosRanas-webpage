import { configureStore } from '@reduxjs/toolkit';
import artistsReducer from '../redux/slices/sliceArtists';
import cartReducer from '../redux/slices/sliceCart';
import globalReducer from '../redux/slices/sliceTestGlobal';

export const store = configureStore({
    // Reducer asignado a estado definido
    reducer: {
        artists: artistsReducer,
        cart: cartReducer,
        global: globalReducer
    },
});