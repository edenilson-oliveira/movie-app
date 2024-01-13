import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import * as Styles from './NavbarStyles.jsx'

function Navbar(){
  return (
    <>
      <Styles.Header>
        <Styles.Title> MOVIES IMDBD </Styles.Title>
        
        <Styles.Search>              <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </Styles.Search>
      </Styles.Header>
    </>
    )
}

export default Navbar