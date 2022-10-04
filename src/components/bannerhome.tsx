import Banner from '../assets/homebanner.jpg';
import BannerMobile from '../assets/homebannermobile.jpg'
import './banner.css';

export default function BannerHome() {
    return (
        <div className='banneroverlay'>
            <img src={Banner} alt="Paysage rocheux au bord de mer" className='bannerimg'/>
            <img src={BannerMobile} alt="Paysage rocheux au bord de mer" className='bannermobile'/>
            <p>Chez vous,<br className='breakpointmobile'></br> partout et ailleurs</p>
        </div>
    )
}