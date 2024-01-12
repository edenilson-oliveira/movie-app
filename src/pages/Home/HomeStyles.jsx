import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  overflow: auto;
  color: #f2f2f2;
  animation-name: anim-exit;
  animation-duration: .5s;
  animation-play-state: paused;
  
  @keyframes anim-exit{
    from{
      transform: translateX(0px);
    }
    to{
      transform: translateX(-50px);
    }
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

export const boxScroll = styled.div`
  width: 100vw;
  height: 150px;
  display: inline-block;
  overflow-x: hidden;
  `

export const boxMovies = styled.div`
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
  