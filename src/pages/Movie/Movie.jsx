import axios from 'axios'
import { useSelector,useDispatch } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import { useQuery } from 'react-query'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faStar, faPlus } from "@fortawesome/free-solid-svg-icons";

import { addFavorites } from './../../redux/movie/slice.js'
import config from '../../../config.js'

import * as Styles from "./MovieStyles.jsx";

function Movie() {
  const navigate = useNavigate();
  
  const { id } = useParams()
  const {dataMovie,isLoading,error} = useQuery('movies', () => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?language=pt-br&api_key=${config.apiKey}`).then(response => response.dataMovie)
  })
  console.log(dataMovie)
  
  const handleClickReturnHome = () => {
     navigate("/");
  };
  const { favoritesMovies } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch()
  
  const handleClickAddFavorites = () => {
    dispatch(addFavorites(dataMovie))
    
  }
  if(isLoading){
    return <div>Carregando</div>
  }
  
  if(error){
    return <div>Algo deu errado!</div>
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
          
        <Styles.Img src={`https://image.tmdb.org/t/p/w500/${dataMovie.poster_path}`} />
        <Styles.TitleMovie>{dataMovie.title}</Styles.TitleMovie>
        <Styles.Subtitle>Sinopse</Styles.Subtitle>
        <Styles.Text>
           {dataMovie.overview ? dataMovie.overview : "Não informada"}
        </Styles.Text>
              
        <Styles.MoreInfo>
          <Styles.Note>
            {dataMovie.vote_average.toFixed(1)}
            <FontAwesomeIcon icon={faStar}/>
          </Styles.Note>
                
          <Styles.Data>
            {dataMovie.release_date}
          </Styles.Data>
        </Styles.MoreInfo>
      </Styles.Main>)
    </>
  );
}

export default Movie;
