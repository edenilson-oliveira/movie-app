import styled from 'styled-components'
import Modal from 'styled-react-modal'

export const StyledModal = Modal.styled`
  width: 100%;
  height: 100%;
`

export const boxSearch = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  background-color: #171538;
  `

export const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black /*#171538*/;
`

export const Title = styled.h1`
  font-size: 1.2em;
  margin: 15px;
  `
  
export const Search = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  margin: 10px 10px;
  color: #f2f2f2;
  background-color: transparent;
 `
 
 export const SearchBar = styled.input`
  width: 70%;
  height: 30px;
  background-color: #7A7B8D60;
  border-radius: 20px;
  border: none;
  margin: 15px 5px;
  color: #f2f2f2;
  padding: 10px;
  }
  `