import { createGlobalStyle,styled } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  body{
    background-color: #100E2A;
    color: #f2f2f2;
    }
    `
 
 export const Loading = styled.div`
  width: 50px;
  height: 50px;
  border: 15px solid #172538;
  border-radius: 50%;
  position: absolute;
  top: 45%;
  left: 40%;
  border-color: transparent;
  animation-name: loop;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  
  @keyframes loop{
    25%{
      border-top-color: #172538;
      transform: rotate(90deg);
    }
    50%{
      border-left-color: #172538;
      transform: rotate(180deg);
    }
    75%{
      border-right-color: #172538;
      transform: rotate(270deg);
    }
    100%{
      border-bottom-color: #172538;
      transform: rotate(360deg);
    }
    }`
  
export default GlobalStyle