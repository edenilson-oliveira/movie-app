import { createSlice } from '@reduxjs/toolkit'

const initialState = ({
  search: '',
  favoritesMovies: []
})

const updateLocalStorage = (data) => {
  localStorage.setItem('favoritesMovies',JSON.stringify(data))
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addFavorites: (state,action) => {
      const isExistsMovie = state.favoritesMovies.some((value) => value.id === action.payload.id)
     
      if(!isExistsMovie){
        state.favoritesMovies.unshift(action.payload)
        
        updateLocalStorage(state.favoritesMovies)
      }
    }
  }
})

export const { addFavorites } = movieSlice.actions

export default movieSlice.reducer