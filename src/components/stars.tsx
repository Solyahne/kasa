import starcolored from '../assets/starcolored.svg';
import stargrey from '../assets/stargrey.svg';

interface starsElements {
    starvalue: string
}

export default function Stars({ starvalue }: starsElements) {
    const range = [1, 2, 3, 4, 5]
    return (
        <div>
            {range.map((rangeElem) =>
                parseInt(starvalue) >= rangeElem ? (
                    <img src={starcolored} alt='' key={rangeElem.toString()} />
                ) : <img src={stargrey} alt='' key={rangeElem.toString()} />
            )}
        </div>
    )
}