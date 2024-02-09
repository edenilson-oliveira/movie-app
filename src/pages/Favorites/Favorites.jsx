import Footer from '../../components/Footer/Footer.jsx'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faXmark,faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import * as Styles from './FavoritesStyles.jsx'
import * as StylesSearch from '../Search/SearchStyles.jsx'

function Favorites(){
  
  const { favoritesMovies } = useSelector(state => state.movieReducer)
  console.log(favoritesMovies)
  const navigate = useNavigate()
  const handleClickNavigateMovie = (movieId) => {
    navigate(`/movie/${movieId}`)
  }
  
  return (
    <>
      <Styles.Main>
        
       {
        favoritesMovies.map((value) => {
      return (
      <StylesSearch.boxMovies onClick={() => handleClickNavigateMovie(value.id)} >
          <img src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} />
          <StylesSearch.TitleMovie>
              {value.title}
          </StylesSearch.TitleMovie>
          <div>
            <button arialLabel="remove movie of favorites">
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
        
      </Styles.Main>
      
    </>
    )
}

export default Favorites