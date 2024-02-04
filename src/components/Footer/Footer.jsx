import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faMagnifyingGlass,faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import * as  Styles from './FooterStyles.jsx'

function Footer(){
  return(
      <>
        <Styles.FooterMenu>
          <Styles.MenuLinks>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} size="lg" style={{color: 'white'}}/>
              </Link>
            </li>
            <li>
              <Link to="/search">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{color: 'white'}}/>
              </Link>
            </li>
            <li>
              <Link to="/favorites">
                <FontAwesomeIcon icon={faStar} size="lg" style={{color: 'yellow'}}/>
              </Link>
           </li>
          </Styles.MenuLinks>
         </Styles.FooterMenu>
      </>
    )
}

export default Footer