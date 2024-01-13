import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faStar, faPlus } from "@fortawesome/free-solid-svg-icons";

import { addFavorites } from './../../redux/movie/slice.js'

import * as Styles from "./MovieStyles.jsx";

function Movie() {
  const { movie } = useSelector(state => state.movieReducer);
  const { favoritesMovies } = useSelector(state => state.movieReducer);
  const navigate = useNavigate();
  const handleClickReturnHome = () => {
    navigate("/");
  };
  
  const dispatch = useDispatch()
  
  const handleClickAddFavorites = () => {
    dispatch(addFavorites(movie))
    console.log(movie,favoritesMovies)
  }

  return (
    <>
      <Styles.Main>
        <Styles.Buttons>
          <Styles.Button onClick={handleClickReturnHome}>
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#f2f2f2" }}
                    />
          </Styles.Button>
        
          <Styles.Button onClick={handleClickAddFavorites}>
            <FontAwesomeIcon icon={faPlus} style={{ color: "#f2f2f2" }} />
          </Styles.Button>
        </Styles.Buttons>
          
        <Styles.Img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          
        <Styles.TitleMovie>{movie.title}</Styles.TitleMovie>
        <Styles.Subtitle>Sinopse</Styles.Subtitle>
        <Styles.Text>
           {movie.overview ? movie.overview : "Não informada"}
        </Styles.Text>
              
        <Styles.MoreInfo>
          <Styles.Note>
            {movie.vote_average}{" "}
            <FontAwesomeIcon icon={faStar}/>
          </Styles.Note>
                
          <Styles.Data>
              {movie.release_date}
          </Styles.Data>
        </Styles.MoreInfo>
      </Styles.Main>
    </>
  );
}

export default Movie;
