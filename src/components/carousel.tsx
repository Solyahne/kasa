import { useState } from "react";
import './carousel.css'
import arrowleft from '../assets/arrowleft.svg';
import arrowright from '../assets/arrowright.svg';

//Déclaration du type (array of string)
interface CarouselElement {
    pictures: string[]
}

export default function Carousel({ pictures }: CarouselElement): JSX.Element {

    const [currentImg, setCurrentImg] = useState(0);
    const length = pictures.length;

    // Si l'image est la dernière (longueur du tableau -1, car la numérotation commence à 0)
    // alors on renvoie à la première (0). Sinon on incrémente pour passer à la suivante
    function next(): void {
        setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
    }

    // Si l'image actuelle est la première (numérotée 0), 
    // on passe à la dernière avec longueur du tableau -1 pour avoir le bon index. 
    // Sinon on passe à la précédente en décrémentant
    function prev(): void {
        setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
    }

    return (
        <article className="carousel">
            {pictures.map((image, index) => {
                return (
                    <div key={index}>
                        {index === currentImg && (
                            <img src={image} alt='' className='carouselimg' />
                        )}
                    </div>
                )
            })}
            {length > 1 ? (
                <div className="carouselelements">
                    <div>
                        <img src={arrowleft} className='arrow arrowleft' onClick={prev} />
                    </div>
                    <p className='bulletpoint'>
                        {currentImg + 1}/{length}
                    </p>
                    <div>
                        <img src={arrowright} className='arrow arrowright' onClick={next}/>
                    </div>
                </div>
            ) : null}
        </article>
    )
}