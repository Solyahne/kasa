import { Navigate, useParams } from 'react-router-dom';
import './logement.css';
import logements from '../../data/logements.json';
import Carousel from "../../components/carousel";
import Tag from '../../components/tag';
import Collapse from '../../components/collapse';
import Stars from '../../components/stars';

export default function Logement(): JSX.Element {

    //Récupération de l'ID du logement dans l'URL
    const idURL = useParams();
    //Extraction de la valeur de l'ID pour pouvoir la comparer
    const idExtracted = Object.values(idURL) as unknown;
    const id = idExtracted as string;

    //On cherche dans les données le logement qui correspond à l'ID
    const logementFound = logements.find((i) => {
        return i.id == id;
    })

    let pictures = logementFound?.pictures as string[];
    let tags = logementFound?.tags as string[];
    let title = logementFound?.title as string;
    let location = logementFound?.location as string;
    let hostname = logementFound?.host.name as string;
    let hostpicture = logementFound?.host.picture as string;
    let equipments = logementFound?.equipments as string[];
    let description = logementFound?.description as string;
    let rating = logementFound?.rating as string;

    return (
        <main className='logement_main'>
            {!logementFound && <Navigate to='/errorpage' />}
            <Carousel pictures={pictures} />
            <div className='container_first_row'>
                <div className='container_gauche'>
                    <h1 className='logement_title'>{title}</h1>
                    <p className='location'>{location}</p>
                    <div className='container_tags'>
                        <Tag tags={tags} />
                    </div>
                </div>
                <div className='container_droite'>
                    <div className='container_host'>
                        <p className='hostname'>{hostname}</p>
                        <img src={hostpicture} alt="Photographie de l'hôte" className='host_picture' />
                    </div>
                    <Stars starvalue={rating} />
                </div>
            </div>
            <div className='container_collapse'>
                <Collapse title='Description' content={description}
                    titleclass='collapse collapse_home' contentclass='collapse_content collapse_description_home'
                    articleclass='home_collapse_elements' isAList={false} />
                <Collapse title='Equipements' listequipements={equipments}
                    titleclass='collapse collapse_home' contentclass='collapse_content collapse_content_home'
                    articleclass='home_collapse_elements' isAList={true} />
            </div>
        </main>
    )
};