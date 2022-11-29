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
        console.log(artistToCart)
        state.includes = false
      } else if (state.cart.some(elem => elem.id === action.payload.id) === true) {
        state.includes = true
      }
    },
    deleteArtist: (state, action) => {
      let index = state.cart.findIndex(item => item.id === action.payload.id)
      action.payload.index === state.cart.index ? state.cart.pop(state.cart[index]) : null;
    },
    resetCart: (state) => {
      state.cart = [];
    }
  }
});

export const { buyArtist, deleteArtist, resetCart } = cartSlice.actions;
export default cartSlice.reducer;