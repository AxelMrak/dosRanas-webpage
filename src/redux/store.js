import { configureStore } from '@reduxjs/toolkit';
import artistsReducer from '../redux/slice';

export const store = configureStore({
    // Reducer asignado a estado definido
    reducer: {
        artists: artistsReducer,
    },
});