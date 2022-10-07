import logo from '../../assets/logofooter.svg';
import './footer.css';

export default function Footer() {
    return (
        <footer>
            <img src={logo} alt="Logo Kasa" className="logofooter" />
            <p>
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}