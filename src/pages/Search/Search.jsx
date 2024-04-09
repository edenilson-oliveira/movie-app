import { useQuery,useQueryClient } from 'react-query'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faMagnifyingGlass,faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useState,useRef } from 'react'

import config from '../../../config.js'
import Footer from '../../components/Footer/Footer.jsx'
import { addLastSearch } from './../../redux/movie/slice.js'


import * as StylesNavbar from '../../components/Navbar/NavbarStyles.jsx'
import * as Styles from './SearchStyles.jsx'
import { Loading } from '../../GlobalStyles.jsx'

function Search(){
  const queryClient = useQueryClient()
  const { movieName } = useParams()
  const inputValue = useRef('')
  const {data,isLoading,error} = useQuery('searchMovie', () => {
      return axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieName ? movieName: ''}&language=pt-br&api_key=${config.apiKey}`).then(response => response.data)
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  
  
  useEffect(() => {
    const lastSearch = localStorage.getItem('lastSearch')
    if(lastSearch && !movieName){
      navigate(`/search/${lastSearch}`)
      dispatch(addLastSearch(lastSearch))
      navigate(0)
    }
    else if(movieName){
      dispatch(addLastSearch(movieName))
    }
  },[movieName])
  
  const handleClickNavigateMovie = (movieId) => {
    navigate(`/movie/${movieId}`)
  }
  
  
  
  const handleClickSearch = () => {
    dispatch(addLastSearch(inputValue.current.value))
    navigate(`/search/${inputValue.current.value}`)
    navigate(0)
  }
  
  const handleClickBackHome = () => {
    navigate('/')
  }
  
  if(isLoading){
    return <Loading><div></div></Loading>
  }
  if(error){
    return <div>Algo deu Errado</div>
  }
  
  return(
    <>
      <Styles.Main>
       <Styles.BoxSearch>
        <Styles.ButtonBackHome onClick={handleClickBackHome} aria-label="Back to home">
           <FontAwesomeIcon icon={faAngleLeft} size="xl"/>
        </Styles.ButtonBackHome>

        
        <StylesNavbar.SearchBar ref={inputValue} type="search"/>
              
        <StylesNavbar.Search>
       
          <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleClickSearch} aria-label="search"/>
          
        </StylesNavbar.Search>
      </Styles.BoxSearch>
      
      <Styles.SectionResults justifyContent={data.results.length > 4 ? 'space-evenly':'start'} flexDirection={data.results.length > 4 ? 'row':'column'}>
        {
        data.results.map((value) => {
        return (
        <Styles.boxMovies onClick={() => handleClickNavigateMovie(value.id)} >
            <img src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} alt={`Image film ${value.title}`} />
            <Styles.TitleMovie>
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
        </Styles.SectionResults>
      </Styles.Main>
      
    </>
    )
}

export default Search