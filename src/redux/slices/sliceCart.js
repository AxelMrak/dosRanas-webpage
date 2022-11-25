import { createSlice } from '@reduxjs/toolkit';
// Estado inicial
const initialState = {
  cart: [],
  includes: false,
};

export const cartSlice = createSlice({
  // Nombre del estado y del reducer
  name: 'cart',
  // Estado inicial donde vemos un array de objetos
  initialState,
  // Reducers para modificar el estado
  reducers: {
    buyArtist: (state, action) => {
      let artistToCart = {
        id: action.payload.id,
        name: action.payload.name,
        img: action.payload.img,
      };
      if (state.cart.some(elem => elem.id === action.payload.id) === false) {
        state.cart.push(artistToCart)
        state.includes = false
      } else if (state.cart.some(elem => elem.id === action.payload.id) === true) {
        state.includes = true
      }
    }
  }
});

export const { buyArtist } = cartSlice.actions;
export default cartSlice.reducer;