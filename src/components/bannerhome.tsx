import Banner from '../assets/homebanner.jpg';
import './banner.css';

export default function BannerHome() {
    return (
        <div className='banneroverlay'>
            <img src={Banner} alt="Une photo de paysage" className='banner'/>
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}