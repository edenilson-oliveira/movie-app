import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  overflow: auto;
  `

export const boxScroll = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: auto;
  `

export const boxMovies = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 5px;
  
  
  & img{
    width: 100%;
    height: 100%;
  }
  `