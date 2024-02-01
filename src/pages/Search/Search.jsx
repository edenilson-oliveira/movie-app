import { useQuery,useQueryClient } from 'react-query'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState,useRef } from 'react'

import config from '../../../config.js'
import { searchMovie,openMovie } from '../../redux/movie/slice.js'

import * as StylesNavbar from '../../components/NavbarStyles.jsx'
import * as Styles from './SearchStyles.jsx'

function Search(){
  const queryClient = useQueryClient()
  const { movieName } = useParams()
  
  const inputValue = useRef('')
  const {data,isLoading,error} = useQuery('searchMovie', () => {
      console.log(movieName)
      return axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieName}&language=pt-br&api_key=${config.apiKey}`).then(response => response.data)
  })
  
  console.log(data,movieName)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  
  const handleClickNavigateMovie = (movieId) => {
    navigate(`/movie/${movieId}`)
  }
  
  
  
  const handleClickSearch = () => {
    navigate(`/search/${inputValue.current.value}`)
    navigate(0)
  }
  
  
  if(isLoading){
    return <div>Carregando...</div>
  }
  if(error){
    return <div>Algo deu Errado</div>
  }
  
  return(
    <>
      <Styles.Main>
      
        
        <StylesNavbar.SearchBar ref={inputValue} type="search"/>
              
        <StylesNavbar.Search>
          <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleClickSearch}/>
        </StylesNavbar.Search>
        
      {
      data.results.map((value) => {
      return (
      <Styles.boxMovies onClick={() => handleClickNavigateMovie(value.id)} >
          <img src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} />
          <Styles.TitleMovie fontSize={value.title.length > 16 ? '1em': '.7em'}>
              {value.title}
          </Styles.TitleMovie>
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