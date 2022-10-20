import './collapse.css'
import arrowbottom from '../assets/arrowbottom.svg'
import arrowtop from '../assets/arrowtop.svg'
import { useState } from "react"

//Déclaration des types
interface CollapseElements {
    title: string
    content?: string
    listequipements?: string[]
    titleclass: string
    contentclass: string
    isAList: boolean
}

export default function Collapse({ title, content, listequipements, titleclass, contentclass, isAList }: CollapseElements): JSX.Element {

    //Définition du statut de base des boutons (fermés, donc false)
    const [open, setOPen] = useState(false);
    // et création de la possiblité de changer leur état
    const show = () => {
        setOPen(!open);
    };

    return (
        <article className="about_elements">
            <button onClick={show} className={titleclass}>{title}
                {open ? <img src={arrowtop} alt='' className='arrow' /> : <img src={arrowbottom} alt='' className='arrowbottom arrow' />}
            </button>
            {/* Si le bouton est ouvert (usestate true), et que c'est une liste, on affiche les éléments sous forme de liste
            Sinon, on affiche le paragraphe */}
            {open && (isAList ?
                (<li className={contentclass}>
                    {listequipements?.map((element, index) => {
                        return (<ul key={index}>{element}</ul>)
                    })}
                </li>)
                :
                (<p className={contentclass}>
                    {content}
                </p>)
            )}
        </article>
    )
}