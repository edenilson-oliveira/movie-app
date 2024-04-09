import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal"
import { useState,useRef } from 'react'
import { ModalProvider } from 'styled-react-modal'
import { useNavigate } from 'react-router-dom'

import * as Styles from "./NavbarStyles.jsx";

function Navbar() {
  const inputValue = useRef('')
  
  const [modalOpen,setModal] = useState(false)
  
  const navigate = useNavigate()
  
  const handleClickSearch = () => {
    if(inputValue.current.value){
      navigate(`/search/${inputValue.current.value}`)
    }
  }
  
  return (
    <>
    <ModalProvider>
      <Styles.Header>
        <Styles.Title> MOVIES IMDBD </Styles.Title>
        
          <Styles.Search onClick={() => setModal(true)} ariaLabel="Search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Styles.Search>
          <Styles.StyledModal 
            isOpen={modalOpen}
            onClick={(e) => e.target.className === 'Modal__wrap-jmcGzM dwgIQz'? setModal(false) : false} ariaLabel="Open search modal">
            
            <Styles.boxSearch>
              <Styles.SearchBar ref={inputValue} type="search"/>
              
              <Styles.Search>
                <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleClickSearch}/>
              </Styles.Search>
            </Styles.boxSearch>
          </Styles.StyledModal >
          
     </Styles.Header>
    </ModalProvider>
    </>
  );
}

export default Navbar;
