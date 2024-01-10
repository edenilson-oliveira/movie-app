import { createSlice } from '@reduxjs/toolkit'

const initialState = ({
  movie: null
})

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    openMovie: (state,action) => {
      state.movie = action.payload
    }
  }
})

export const { openMovie } = movieSlice.actions

export default movieSlice.reducer