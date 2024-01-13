import axios from 'axios'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import config from '../../../config.js'
import Navbar from '../../components/Navbar.jsx'
import { openMovie } from '../../redux/movie/slice.js'
import * as Styles from './HomeStyles.jsx'

function Home(){
  const {data,isLoading,error} = useQuery('movies', () => {
    return axios.get(`https://api.themoviedb.org/3/discover/movie/?language=pt-br&api_key=${config.apiKey}`).then(response => response.data)
  })
  const dispatch = useDispatch()
  
  const navigate = useNavigate()
  
  const handleClickNavigateMovie = (movie) => {
    dispatch(openMovie(movie))
    navigate('/movie')
  }
    
  if(isLoading){
    return <Styles.Loading></Styles.Loading>
  }
  
  if(error){
    return <div>Algo deu errado!</div>
  }
  
  return(
    <>
      <Navbar />
      <Styles.Main>
      
        <Styles.boxScroll>
          {
            data.results.map((value) => {
            return (
              <Styles.boxMovies width="90%" height="170px">
                <img src={`https://image.tmdb.org/t/p/w500/${value.backdrop_path}`} />
              </Styles.boxMovies>
              )
            })
          }
        </Styles.boxScroll>
      
        {
        data.results.map((value) => {
        console.log(value)
        return (
          <Styles.boxMovies width="145px" height="260px" onClick={() => handleClickNavigateMovie(value)}>
            <img src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} />
            <Styles.TitleMovie fontSize={value.title.length > 16 ? '.52em': '.7em'}>
            {value.title}
            </Styles.TitleMovie>
            <p>
              {value.vote_average}
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

export default Home

