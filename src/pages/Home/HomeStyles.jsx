import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  overflow: auto;
  color: #f2f2f2;
  
  @media(max-width: 768px){
    padding-bottom: 20%;
  }
  }
  `

export const boxScroll = styled.div`
  width: 100vw;
  height: 150px;
  display: inline-block;
  overflow-x: hidden;
  `

export const BoxMovies = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 5px;
  padding: 5px;
  background-color: #172538;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 10px;
  
  & img{
    width: 100%;
    height: 80%;
    border-radius: 10px;
  }
  & p{
    width: 100%;
    font-size: .75em;
    margin: 2px 5px;
    color: #FFD432;
    font-weight: bold;
  }
  `
  
export const TitleMovie = styled.h2`
    width: 100%;
    font-size: ${(props) => props.fontSize};
    margin: 5px;

  `
  