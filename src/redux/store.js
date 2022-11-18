import { configureStore } from '@reduxjs/toolkit';
import  artistsReducer  from '../redux/slice';

export const store = configureStore({
    reducer: {
        artists: artistsReducer,
    },
});