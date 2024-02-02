import { createSlice } from '@reduxjs/toolkit'

const initialState = ({
  movieId: 0,
  search: '',
  favoritesMovies: []
})

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addFavorites: (state,action) => {
      const isExistsMovie = state.favoritesMovies.some((value) => value.id === action.payload.id)
     
      if(!isExistsMovie){
        state.favoritesMovies.unshift(action.payload)
      }
    }
  }
})

export const { addFavorites } = movieSlice.actions

export default movieSlice.reducer