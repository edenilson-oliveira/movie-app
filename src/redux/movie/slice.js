import { createSlice } from '@reduxjs/toolkit'

const initialState = ({
  lastSearch: '',
  favoritesMovies: []
})

const updateLocalStorage = (data) => {
  localStorage.setItem('favoritesMovies',JSON.stringify(data))
}

const updateLocalStorageSearch = (search) => {
  localStorage.setItem('lastSearch',search)
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
    },
    removeFavorites: (state,action) => {
      state.favoritesMovies.filter((value,index) => {
        if(value.id === action.payload){
          state.favoritesMovies.splice(index,1)
          updateLocalStorage(state.favoritesMovies)
        }
      })
    },
    addLastSearch: (state,action) => {
      state.lastSearch = action.payload
      updateLocalStorageSearch(state.lastSearch)
    }
  }
})

export const { addFavorites,removeFavorites,addLastSearch } = movieSlice.actions

export default movieSlice.reducer
