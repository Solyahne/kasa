import { Navigate, useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import Carousel from "../../components/carousel";


export default function Logement(): JSX.Element {

    //Récupération de l'ID du logement dans l'URL
    const idURL = useParams(); 
    //Extraction de la valeur de l'ID pour pouvoir la comparer
    const idExtracted = Object.values(idURL) as unknown; 
    const id = idExtracted as string;

    //On cherche dans les données le logement qui correspond à l'ID
    const logementFound = logements.find((i) => {
        return i.id == id;
    });

    let pictures = logementFound?.pictures as string[]; 

    return (
        <main>
            {!logementFound && <Navigate to='/errorpage'/>}
            <Carousel pictures={pictures} />
        </main>
    )
};