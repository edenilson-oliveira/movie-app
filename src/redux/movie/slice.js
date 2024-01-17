import { createSlice } from '@reduxjs/toolkit'

const initialState = ({
  movie: null,
  search: '',
  favoritesMovies: []
})

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    openMovie: (state,action) => {
      state.movie = action.payload
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