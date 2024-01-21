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
    openMovie: (state,action) => {
      state.movieId = action.payload
    },
    searchMovie: (state,action) => {
      state.search = action.payload
    },
    addFavorites: (state,action) => {
      state.favoritesMovies.unshift(action.payload)
    }
  }
})

export const { openMovie,searchMovie,addFavorites } = movieSlice.actions

export default movieSlice.reducer