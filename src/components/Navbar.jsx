import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal"
import { useState } from 'react'
import { ModalProvider } from 'styled-react-modal'

import * as Styles from "./NavbarStyles.jsx";

function Navbar() {
  
  const [modalOpen,setModal] = useState(false)
  
  return (
    <>
    <ModalProvider>
      <Styles.Header>
        <Styles.Title> MOVIES IMDBD </Styles.Title>
        
          <Styles.Search onClick={() => setModal(true)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Styles.Search>
          
          <Styles.StyledModal 
            isOpen={modalOpen}
            >
            
            <Styles.SearchBar type="search" />
          <Styles.Search onClick={() => setModal(false)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Styles.Search>
       </Styles.StyledModal >
          
     </Styles.Header>
    </ModalProvider>
    </>
  );
}

export default Navbar;
