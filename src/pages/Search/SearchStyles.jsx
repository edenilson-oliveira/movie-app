import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 90vh;
  overflow: auto;
  color: #f2f2f2;
  padding-bottom: 25px;
  `

export const SectionResults = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: wrap;
  
 @media (orientation: landscape){
    flex-direction: row;
  }
  
  @media (min-width: 768px){
      flex-direction: row;
  }
  `
  
 export const ButtonBackHome = styled.div`
  width: 20px;
  height: 20px;
  margin: 0px 0px 0px 0px;
 `
  
export const BoxSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 50px;`
  
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
  }
  
  @media (orientation: landscape){
    width: 40%;
  }
  
  @media (min-width: 768px){
      width: 45%;
      height: 150px;
      align-items: start;
      
      
      & p{
        font-size: 1em;
      }
      
      h2{
        font-size: 1.2em;
        margin: 15px;
      }
    }`
  
export const TitleMovie = styled.h2`
    width: 55%;
    font-size: .8em;
    padding: 10px;

  `