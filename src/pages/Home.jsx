//import API_KEY from '../../.env'
import { useState,useEffect } from 'react'
import config from '../../config.js'

function Home(){
  const [data,setData] = useState()
  
  useEffect(
    async () => {
      const movieData = await fetch(`https://api.themoviedb.org/3/discover/movie/?language=pt-br&api_key=${config.apiKey}`).then((response) => response.json()).catch((err) => err)
      console.log(movieData)
    }
    ,[])
  return(
    <>
      <div>

      </div>
    </>
    )
}

export default Home