import './collapseabout.css'
import arrowbottom from '../assets/arrowbottom.svg'
import arrowtop from '../assets/arrowtop.svg'
import { useState } from "react"

//Déclaration des types
interface CollapseElements {
    title: string
    content: string
}


export default function CollapseAbout({ title, content }: CollapseElements) {

    //Définition du statut de base des boutons (fermés, donc false)
    const [open, setOPen] = useState(false);
    // et création de la possiblité de changer leur état
    const show = () => {
        setOPen(!open);
    };

    return (
        <article className="aboutelements">
            <button onClick={show} className='collapse'>{title}
                {open ? <img src={arrowtop} alt='' /> : <img src={arrowbottom} alt='' className='arrowbottom'/>}
            </button>
            {/* Si le bouton est ouvert (usestate true), alors on affiche le paragraphe */}
            {open &&
                (<p className='collapsecontent'>{content}
                </p>)
            }
        </article>
    )
}