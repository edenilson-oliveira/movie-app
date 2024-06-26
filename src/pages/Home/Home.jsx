import axios from 'axios'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";

import config from '../../../config.js'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'

import * as Styles from './HomeStyles.jsx'
import { Loading } from '../../GlobalStyles.jsx'

function Home(){
  const {data,isLoading,error} = useQuery('movies', () => {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?language=pt-br&api_key=${config.apiKey}`).then(response => response.data)
  })
  
  const navigate = useNavigate()
  
  const handleClickNavigateMovie = (movieId) => {
    navigate(`/movie/${movieId}`)
  }
    
  if(isLoading){
    return <Loading><div></div></Loading>
  }
  
  if(error){
    console.log(error)
    return <div>Algo deu errado!</div>
  }
  
  return(
    <>

      <Navbar/>
        
      <Styles.Main>
        <Styles.BoxScroll>
          {
          data.results.map((value,index) => {
            return (
            <Styles.divMovie onClick={() => handleClickNavigateMovie(value.id)}>
              <img src={`https://image.tmdb.org/t/p/w500/${value.backdrop_path}`} alt={`Image film ${value.title}`} />
            </Styles.divMovie>
            )
            })
          }
        </Styles.BoxScroll>
        
        {
        data.results.map((value) => {
        return (
          <Styles.BoxMovies width="145px" height="260px" onClick={() => handleClickNavigateMovie(value.id)} aria-label={`Go to movie ${value.title}`}>

            <img src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} alt={`Image film ${value.title}`} />
            <Styles.TitleMovie fontSize={value.title.length > 16 ? '.52em': '.7em'}>
            {value.title}
            </Styles.TitleMovie>
            <p>
              {value.vote_average.toFixed(1)}
              <FontAwesomeIcon icon={faStar} size="xs" style={{paddingLeft:"2px"}}/>
             </p>
                       
          </Styles.BoxMovies>
          )
        })
        }
      </Styles.Main>

    </>
    )
}

export default Home

