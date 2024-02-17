import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  
  @media(max-width: 768px){
    padding-bottom: 60%;
  }
  `

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  
`

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: #7A7B806E;
  border-radius: 50%;
  border: none;
  margin: 15px 20px;
  
  @media(min-width: 768px){
    width: 70px;
    height: 70px;
  }
  
  }
  `

export const Img = styled.img`
  width: 100%;
  height: 65%;
  
`

export const Filter = styled.div`
  width: 100%;
  height: 30px;
  margin-left: -3px;
  filter: blur(5px);
  background-color: #100E2A;
  position: relative;
  top: -15px;
  `

export const TitleMovie = styled.h1`
  color: white;
  font-size: 1.5em;
  padding: 0px 20px;
  
  @media(min-width: 768px){
    font-size: 2em;
  }
  
  `
 
export const Subtitle = styled.h2`
  font-size: 1.3em;
  padding: 15px;
  
  @media(min-width: 768px){
    font-size: 2em;
    padding: 20px;
  }`
  
export const Text = styled.p`
  color: gray;
  padding: 5px 15px;
  
  @media(min-width: 768px){
    font-size: 2em;
    
    padding: 5px 25px;
  }`

export const MoreInfo = styled.div`
  display: flex;
  justify-content: space-evenly;`

export const Note = styled.p`
  color: #FFD432;
  margin: 15px;
  
  @media(min-width: 768px){
    font-size: 1.5em;
  }
`

export const Date = styled.p`
  margin: 15px;
 
  @media(min-width: 768px){
    font-size: 1.5em;
  }`

export const Genres = styled.div`
  width: 95%;
  display: flex;
  margin: 0 10px;
  
  & div{
    border: 1px solid white;
    margin: 2px;
    padding: 3px 5px;
    border-radius: 5px;
    color: white;
    font-size: .8em;
    }`