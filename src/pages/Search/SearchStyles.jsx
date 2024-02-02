import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  overflow: auto;
  color: #f2f2f2;
  `
  
 export const ButtonBackHome = styled.div`
  width: 20px;
  height: 20px;
 `
  
export const boxMovies = styled.div`
  width: 90%;
  height: 120px;
  margin: 5px;
  padding: 5px;
  background-color: #172538;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  
  & img{
    width: 30%;
    height: 100%;
    border-radius: 10px;
  }
  & p{
    width: 15%;
    font-size: .8em;
    margin: 2px 5px;
    color: #FFD432;
    font-weight: bold;
    align-self: start;
    padding: 10px 5px;
  }`
  
export const TitleMovie = styled.h2`
    width: 55%;
    font-size: .8em;
    padding: 10px;

  `