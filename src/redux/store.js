import { configureStore } from '@reduxjs/toolkit';
import artistsReducer from '../redux/slices/sliceArtists';
import cartReducer from '../redux/slices/sliceCart';
import globalEnglishReducer from '../redux/slices/sliceGlobalEnglish';
import globalSpanishReducer from '../redux/slices/sliceGlobalSpanish';

export const store = configureStore({
    // Reducer asignado a estado definido
    reducer: {
        artists: artistsReducer,
        cart: cartReducer,
        globalEnglish: globalEnglishReducer,
        globalSpanish: globalSpanishReducer
    },
});