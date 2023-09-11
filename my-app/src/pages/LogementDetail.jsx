import { useParams } from 'react-router-dom';
import data from '../Data/DataLogement.json';

function LogementDetail() {
  
    const { id } = useParams();
  
    const logement = data.find(l => l.id === id);

    if (!logement) {
        return <div>Logement non trouvé</div>;
    }

    return (
        <div>
            <h1>{logement.title}</h1>
            <img src={logement.cover} alt={logement.title} />
            {/**/}
        </div>
    );
}

export default LogementDetail;
