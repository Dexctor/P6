import '../styles/logementDetails.scss';
import { useParams } from 'react-router-dom';
import data from '../Data/DataLogement.json';

function LogementDetail() {
  
    const { id } = useParams();
  
    const logement = data.find(l => l.id === id);

    if (!logement) {
        return <div>Logement non trouvé</div>;
    }

    return (
        <div className="logement_container">
        <div className="image_container">
            <img src={logement.cover} alt={logement.title} />
        </div>
        <div className="info_container">
            <div className="left_info">
                <h1 className="logement_title">{logement.title}</h1>
                <p className="logement_location">{logement.location}</p>
            </div>
            <div className="right_info">
                <p className="host_name">{logement.host.name}</p>
                <img src={logement.host.picture} alt={logement.host.name} className="host_image"/>
            </div>
         
        </div>
        <div className="tags_rating_container">
                <div className="tags">
                        {logement.tags.map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                </div>
                    <div className="rating">
                        {"★".repeat(logement.rating)}
                    </div>
            </div>
    </div>
    );
}

export default LogementDetail;
