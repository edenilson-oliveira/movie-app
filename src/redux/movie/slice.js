import { createSlice } from '@reduxjs/toolkit'

const initialState = ({
  movie: null,
  favoritesMovies: []
})

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    openMovie: (state,action) => {
      state.movie = action.payload
    },
    addFavorites: (state,action) => {
      state.favoritesMovies.unshift(action.payload)
    }
  }
})

export const { openMovie,addFavorites } = movieSlice.actions

export default movieSlice.reducer