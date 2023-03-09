import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

function Card(prop){
    const {imageUrl,title, googleMapsUrl,description,startDate,endDate,location} = prop.data
    return(
        <div className="card">
            <img src={imageUrl} />
            <div className="card-content">
                <div className="card-links">
                    <FontAwesomeIcon icon={faLocationDot} className="red" />
                    <p >{location}</p>
                    <a href={googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{title}</h1>
                <strong><p>{startDate} - {endDate}</p></strong>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card




