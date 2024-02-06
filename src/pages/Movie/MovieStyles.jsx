import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 83.6vh;
  overflow: auto;
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
  margin: 15px 20px;`

export const Img = styled.img`
  width: 100%;
  height: 460px;
`

export const Filter = styled.div`
  width: 101%;
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
  `
 
export const Subtitle = styled.h2`
  font-size: 1.3em;
  padding: 15px;`
  
export const Text = styled.p`
  color: gray;
  padding: 5px 15px;`

export const MoreInfo = styled.div`
  display: flex;
  justify-content: space-evenly;`

export const Note = styled.p`
  color: #FFD432;
  margin: 15px;
`

export const Data = styled.p`
  margin: 15px;`