import Banner from '../assets/aboutbanner.jpg';
import BannerMobile from '../assets/aboutbannermobile.jpg'
import './banner.css';

export default function BannerAbout() {
    return (
        <div className='banneroverlay overlayabout' >
            <img src={Banner} alt="Une photo de paysage" className='banner'/>
            <img src={BannerMobile} alt="Une photo de paysage" className='bannermobile'/>
        </div>
    )
}