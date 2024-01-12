import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft,faStar} from '@fortawesome/free-solid-svg-icons'

import * as Styles from './MovieStyles.jsx'

function Movie(){
  const {movie} = useSelector(state => state.movieReducer)
  const navigate = useNavigate()
  const handleClickReturnHome = () => {
    navigate('/')
  }
  
  return(
    <>
      <Styles.Main>
        <Styles.ButtonBack onClick={handleClickReturnHome}><FontAwesomeIcon icon={faArrowLeft} /></Styles.ButtonBack>
        <Styles.Img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <Styles.TitleMovie>{movie.title}</Styles.TitleMovie>
        
        <Styles.Subtitle>Sinopse</Styles.Subtitle>
        <Styles.Text>{movie.overview ? movie.overview: 'Não informada'}</Styles.Text>
        
        <Styles.MoreInfo>
          <Styles.Note>
            {movie.vote_average} <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B"}} />
          </Styles.Note>
          <Styles.Data>{movie.release_date}</Styles.Data>
        </Styles.MoreInfo>

      </Styles.Main>
    </>
    )

}

export default Movie
