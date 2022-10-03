import { Link } from 'react-router-dom'
import './card.css'

interface CardProps {
    title: string
    cover: string
}

export default function Card({ cover, title }: CardProps) {
    return (
        <article className='cardlogement'>
                <img src={cover} alt='' className='cardcover' />
                <p>
                    {title}
                </p>
        </article>
    )
}