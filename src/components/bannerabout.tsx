import Banner from '../assets/aboutbanner.jpg';
import './banner.css';

export default function BannerAbout() {
    return (
        <div className='banneroverlay'>
            <img src={Banner} alt="Une photo de paysage" className='banner'/>
        </div>
    )
}