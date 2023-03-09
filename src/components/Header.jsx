

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons"

function Header(){
    return(
        <header>
            <FontAwesomeIcon icon={faEarthAmerica} className="fa-2xl" />
            <p>my travel journal.</p>
        </header>
    )
}

export default Header