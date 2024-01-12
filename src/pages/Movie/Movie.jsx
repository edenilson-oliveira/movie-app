import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {faStar} from '@fortawesome/fontawesome-svg-core'

import * as Styles from './MovieStyles.jsx'

function Movie(){
  const {movie} = useSelector(state => state.movieReducer)
  return(
    <>
      <Styles.Main>
        <Styles.Img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <Styles.TitleMovie>{movie.title}</Styles.TitleMovie>
        
        <Styles.Subtitle>Sinopse</Styles.Subtitle>
        <Styles.Text>{movie.overview}</Styles.Text>
        
        <Styles.MoreInfo>
          <Styles.Note>{movie.vote_average} </Styles.Note>
          <Styles.Data>{movie.release_date}</Styles.Data>
        </Styles.MoreInfo>

      </Styles.Main>
    </>
    )

}

export default Movie