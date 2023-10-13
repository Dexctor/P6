import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import data from '../Data/DataLogement.json';
import Collapse from '../composant/Collapse';
import Tag from '../composant/Tag';
import Rating from '../composant/Rating';
import Carousel from '../composant/Carousel';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/rating.scss';
import '../styles/logementDetails.scss';


function LogementDetail() {
    const { id } = useParams();
    const logement = data.find(l => l.id === id);

    if (!logement) {
        return <Navigate to='/NotFoundPage' state={{ reason: "logement non trouvé" }} />;
    }
    
    return (
        <div className="logement_container">
            <div className="image_container">
            <Carousel images={logement.pictures} />
            </div>
            <div className="global_container">   
                <div className="sub_container_1">
                    <div className='logement_details'>
                        <h1 className="logement_title">{logement.title}</h1>
                        <span className="logement_location">{logement.location}</span>
                    </div>
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <Tag key={index} label={tag} />
                        ))}
                    </div>
                </div>
                <div className="sub_container_2">
                    <div className='host_info'>
                        <p className="host_name">{logement.host.name}</p>
                        <img src={logement.host.picture} alt={logement.host.name} className="host_image"/>
                    </div>
                    <div className="ratings">
                        <Rating value={Number(logement.rating)} />
                    </div>
                </div>
            </div>
            <div className="dropdowns_container">
                <div className="menu-dropdown-container">
                    <Collapse title="Description">
                        <p>{logement.description}</p>
                    </Collapse>
                </div>
                <div className="menu-dropdown-container">
                    <Collapse title="Équipements">
                        <ul className="list_equipement">
                            {logement.equipments.map(equipment => (
                                <li key={equipment}>{equipment}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
        </div>
    );
}    

export default LogementDetail;
