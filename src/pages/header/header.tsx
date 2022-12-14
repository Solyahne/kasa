import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './header.css';

export default function Header(): JSX.Element {
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
                    className={({ isActive }) =>
                        isActive
                            ? "link-active" : ""}
                >
                    A propos
                </NavLink>

            </nav>
        </header>
    )
};