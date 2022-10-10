import Banner from '../assets/aboutbanner.jpg';
import BannerMobile from '../assets/aboutbannermobile.jpg'
import './banner.css';

export default function BannerAbout(): JSX.Element {
    return (
        <div className='banneroverlay overlayabout' >
            <img src={Banner} alt="Un paysage montagneux" className='bannerimg'/>
            <img src={BannerMobile} alt="Un paysage montagneux" className='bannermobile'/>
        </div>
    )
}