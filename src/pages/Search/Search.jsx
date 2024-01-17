import { useQuery } from 'react-query'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import config from '../../../config.js'
import * as StylesHome from '../Home/HomeStyles.jsx'

function Search(){
  const { search } = useSelector(state => state.movieReducer)
  
  const {data,isLoading,error} = useQuery('searchMovie', () => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&language=en-US&api_key=${config.apiKey}`).then(response => response.data)
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
      {
      data.results.map((value) => {
      return (
      <StylesHome.boxMovies width="145px" height="260px" onClick={() => handleClickNavigateMovie(value)}>
            <img src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} />
            <StylesHome.TitleMovie fontSize={value.title.length > 16 ? '.52em': '.7em'}>
            {value.title}
            </StylesHome.TitleMovie>
            <p>
              {value.vote_average}
              <FontAwesomeIcon icon={faStar} size="xs" style={{paddingLeft:"2px"}}/>
             </p>
                       
        </StylesHome.boxMovies>
        )
      })
      }
    </>
    )
}

export default Search