import { configureStore, createSlice } from '@reduxjs/toolkit';

// Creazione dello slice Redux per i preferiti
const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: [],
  reducers: {
    addFavourite: (state, action) => {
      
      state.push(action.payload);
    },
  },
});


export const { addFavourite } = favouritesSlice.actions;


const store = configureStore({
  reducer: {
    favourites: favouritesSlice.reducer,
  },
});

export default store;
