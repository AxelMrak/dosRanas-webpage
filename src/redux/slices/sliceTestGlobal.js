import { createSlice } from "@reduxjs/toolkit";
// ? Estado inicial que contiene dos arrays con los objetos clasificados por el tipo de objeto. Estos dos arrays se dividen en un idioma u otro.
const initialState = {
  globalEn: [
    {
      type: 'service',
      name: 'VideoClip Recording',
      description: ''
    },
    {
      type: 'artist',
      name: 'Q Lokura',
      description: ''
    },
    {
      type: 'equipment',
      name: 'Sony X30Pro',
      description: ''
    },
    {
      type: 'service',
      name: 'Sound Administration',
      description: ''
    },
    {
      type: 'artist',
      name: 'LaJuana',
      description: ''
    },
    {
      type: 'equipment',
      name: 'Sony Hxr Nx5',
      description: ''
    },
  ],
  globalEs: [
    {
      type: 'service',
      name: 'Grabacion de videoclip',
      description: ''
    },
    {
      type: 'artist',
      name: 'Q Lokura',
      description: ''
    },
    {
      type: 'equipment',
      name: 'Sony X30Pro',
      description: ''
    },
    {
      type: 'service',
      name: 'Administracion de sonido',
      description: ''
    },
    {
      type: 'artist',
      name: 'LaJuana',
      description: ''
    },
    {
      type: 'equipment',
      name: 'Sony Hxr Nx5',
      description: ''
    },
  ],
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    
  },
});