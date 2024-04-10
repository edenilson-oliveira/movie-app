import Footer from '../../components/Footer/Footer.jsx'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faXmark,faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import { addFavorites } from './../../redux/movie/slice.js'
import { removeFavorites } from './../../redux/movie/slice.js'

import * as Styles from './FavoritesStyles.jsx'
import * as StylesSearch from '../Search/SearchStyles.jsx'

function Favorites(){
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favoritesMovies'))
    if(data){
      data.forEach((value) => {
        dispatch(addFavorites(value))
      })
    }
  },[])
  
  const handleClickRemoveMovie = (movieId) => {
    dispatch(removeFavorites(movieId))
  }
  
  const { favoritesMovies } = useSelector(state => state.movieReducer)
  
  const navigate = useNavigate()
  
  const handleClickNavigateMovie = (movieId) => {
    console.log(movieId)
    navigate(`/movie/${movieId}`)
  }
  
  return (
    <>
      <Styles.Main>
        
        <StylesSearch.SectionResults justifyContent={favoritesMovies.length > 4 ? 'space-evenly':'start'} flexDirection={favoritesMovies.length > 4 ? 'row':'column'}>
          
           {
            favoritesMovies.map((value) => {
          return (
          <StylesSearch.boxMovies onClick={(e) => e.target.className !== 'SVGAnimatedString'? handleClickNavigateMovie(value.id) : console.log(e.target.className)  }>
              <img src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} alt={`Image film ${value.title}`}/>
              <StylesSearch.TitleMovie>
                  {value.title}
              </StylesSearch.TitleMovie>
              <div>
                <button aria-label="remove movie of favorites" onClick={ () => handleClickRemoveMovie(value.id)}>
                  <FontAwesomeIcon icon={faXmark} size="2xl" />
                </button>
                <p>
                  {value.vote_average.toFixed(1)}
    
                </p>
    
              </div>
            </StylesSearch.boxMovies>
            )
          })
          
          }
        </StylesSearch.SectionResults>
      </Styles.Main>
      
    </>
    )
}

export default Favorites