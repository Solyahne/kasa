import { Link } from 'react-router-dom'
import './card.css'

interface CardProps {
    title: string
    cover: string
    idLink: string
}

export default function Card({ cover, title, idLink }: CardProps): JSX.Element {
    return (
        <Link to={`logement/${idLink}`}>
        <article className='cardlogement'>
                <img src={cover} alt='' className='cardcover' />
                <p>
                    {title}
                </p>
        </article>
        </Link>
    )
}