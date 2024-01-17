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
  
export const boxMovies = styled.div`
  width: 100%;
  height: 120px;
  margin: 5px;
  padding: 5px;
  background-color: #172538;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  
  & img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  & p{
    width: 100%;
    font-size: .75em;
    margin: 2px 5px;
    color: #FFD432;
    font-weight: bold;
  }`