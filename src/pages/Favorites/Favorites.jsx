import Footer from '../../components/Footer/Footer.jsx'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import * as Styles from './FavoritesStyles.jsx'
import { boxMovies,TitleMovie } from '../Search/SearchStyles.jsx'

function Favorites(){
  
  const { favoritesMovies } = useSelector(state => state.movieReducer)
  console.log(favoritesMovies)
  
  const handleClickNavigateMovie = (movieId) => {
    navigate(`/movie/${movieId}`)
  }
  
  return (
    <>
      <Styles.Main>
        
       {
        favoritesMovies.map((value) => {
      return (
      <boxMovies onClick={() => handleClickNavigateMovie(value.id)} >
          <img src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} />
          <TitleMovie>
              {value.title}
          </TitleMovie>
          <p>
            {value.vote_average.toFixed(1)}
            <FontAwesomeIcon icon={faStar} size="xs" style={{paddingLeft:"2px"}}/>
          </p>
        </boxMovies>
        )
      })
      
      }
        
      </Styles.Main>
      
    </>
    )
}

export default Favorites