import axios from 'axios'
import { useQuery } from 'react-query'

import config from '../../config.js'
import * as Styles from './HomeStyles.jsx'

function Home(){
  const {data,isLoading,error} = useQuery('movies', () => {
    return axios.get(`https://api.themoviedb.org/3/discover/movie/?language=pt-br&api_key=${config.apiKey}`).then(response => response.data)
  })
  
  if(isLoading){
    return <div>Carregando...</div>
  }
  
  if(error){
    return <div>Algo deu errado!</div>
  }
  return(
    <>
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
          <Styles.boxMovies width="145px" height="245px">
            <img src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} />
            <Styles.TitleMovie fontSize={value.title.length > 30 ? '.5em': '.7em'}>{value.title}</Styles.TitleMovie>
            <p>{value.vote_average}</p>
          </Styles.boxMovies>
          )
        })
        }
      </Styles.Main>
    </>
    )
}

export default Home