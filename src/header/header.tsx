import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Header() {
    return (
        <header>
        <img src={logo} alt='logo Kasa'></img>
        <nav>
            <Link to='/'>Accueil</Link>
            <Link to='/about'>A propos</Link>
        </nav>
        </header>
    )
}