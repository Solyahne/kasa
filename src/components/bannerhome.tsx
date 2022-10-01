import Banner from '../assets/homebanner.jpg';
import BannerMobile from '../assets/homebannermobile.jpg'
import './banner.css';

export default function BannerHome() {
    return (
        <div className='banneroverlay'>
            <img src={Banner} alt="Une photo de paysage" className='banner'/>
            <img src={BannerMobile} alt="Une photo de paysage" className='bannermobile'/>
            <p>Chez vous,<br className='breakpointmobile'></br> partout et ailleurs</p>
        </div>
    )
}