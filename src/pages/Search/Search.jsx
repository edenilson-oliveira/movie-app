import { useQuery } from 'react-query'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import config from '../../../config.js'
import { openMovie } from '../../redux/movie/slice.js'

import * as StylesHome from '../Home/HomeStyles.jsx'
import * as Styles from './SearchStyles.jsx'

function Search(){
  const { search } = useSelector(state => state.movieReducer)
  
  const {data,isLoading,error} = useQuery('searchMovie', () => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&language=pt-br&api_key=${config.apiKey}`).then(response => response.data)
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleClickNavigateMovie = (movie) => {
    dispatch(openMovie(movie))
    navigate('/movie')
  }
  
  if(isLoading){
    return <div>Carregando...</div>
  }
  if(error){
    return <div>Algo deu Errado</div>
  }
  
  return(
    <>
      <h1>Search</h1>
      
      <Styles.Main>
      
      {
      data.results.map((value) => {
      return (
      <Styles.boxMovies onClick={() => handleClickNavigateMovie(value)}>
            <img src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} />
            <StylesHome.TitleMovie fontSize={value.title.length > 16 ? '1em': '.7em'}>
              {value.title}
            </StylesHome.TitleMovie>
            <p>
              {value.vote_average.toFixed(1)}
              <FontAwesomeIcon icon={faStar} size="xs" style={{paddingLeft:"2px"}}/>
             </p>
                       
        </Styles.boxMovies>
        )
      })
      }
      </Styles.Main>
    </>
    )
}

export default Search