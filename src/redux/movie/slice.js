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
      state.favoritesMovies.unshift(action.payload)
    }
  }
})

export const { openMovie,searchMovie,addFavorites } = movieSlice.actions

export default movieSlice.reducer