import { useSelector } from 'react-redux'

import * as Styles from './MovieStyles.jsx'

function Movie(){
  const {movie} = useSelector(state => state.movieReducer)
  return(
    <>
      <Styles.Main>
        <Styles.Img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <Styles.TitleMovie>{movie.title}</Styles.TitleMovie>
      </Styles.Main>
    </>
    )

}

export default Movie