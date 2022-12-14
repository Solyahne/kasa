import Collapse from "../../components/collapse";
import Banner from '../../components/banner';
import bannerimg from '../../assets/aboutbanner.jpg';
import bannermobile from '../../assets/aboutbannermobile.jpg';
import './about.css';

//Contenu des composants de la page A propos
const aboutContent = [
  {
    title: 'Fiabilité',
    content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
  },
  {
    title: 'Respect',
    content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  },
  {
    title: 'Service',
    content: `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`
  },
  {
    title: 'Sécurité',
    content: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`
  }
]

//Création des éléments de la page à propos
export default function About(): JSX.Element {
  return (
    <main className="aboutmain">
      <Banner
      banner={bannerimg}
      banneralt='Un paysage montagneux'
      bannermobile={bannermobile}
      classtext='notext' />
      {aboutContent.map((aboutelement, index) => (
        <Collapse
          key={index}
          title={aboutelement.title}
          content={aboutelement.content}
          titleclass='collapse' 
          contentclass='collapse_content'
          articleclass='collapse_elements'
          isAList={false}/>
      ))}
    </main>
  )
}