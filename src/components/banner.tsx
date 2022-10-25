import './banner.css';

interface BannerElements {
    banner: string
    bannermobile: string 
    banneralt: string
    classtext: string
}

export default function BannerHome({banner, bannermobile, banneralt, classtext}: BannerElements): JSX.Element {
    return (
        <div className='banneroverlay'>
            <img src={banner} alt={banneralt} className='bannerimg'/>
            <img src={bannermobile} alt={banneralt} className='bannermobile'/>
            <p className={classtext}>Chez vous,<br className='breakpointmobile'></br> partout et ailleurs</p>
        </div>
    )
} 