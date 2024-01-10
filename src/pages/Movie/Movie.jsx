import { useSelector } from 'react-redux'

import * as Styles from './MovieStyles.jsx'

function Movie(){
  const {movie} = useSelector(state => state.movieReducer)
  return(
    <>
      <Styles.Main>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      </Styles.Main>
    </>
    )

}

export default Movie