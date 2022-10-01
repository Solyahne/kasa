import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './header.css';

export default function Header() {
    return (
        <header>
            <img src={logo} alt='logo Kasa' className='logo'></img>
            <nav>
                {/* Utilisation de NavLink pour gérer le style sur les liens actifs en ajoutant une classname spécifique */}
                <NavLink end to={'/'}
                    className={({ isActive}) =>
                        isActive
                            ? "link-active" : ""}
                >
                    Accueil
                </NavLink>

                <NavLink to={'/about'}
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "link-active" : ""}
                >
                    A propos
                </NavLink>

            </nav>
        </header>
    )
};