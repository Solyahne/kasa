import './tag.css';

interface tagsElements {
    tags: string[]
}

export default function Tag({ tags }: tagsElements) {
    return (
        <>
            {tags.map((element, index) => (
                <div className='tag' key={index}>
                    <p className='tagtext'>
                        {element}
                    </p>
                </div>
            ))}
        </>
    )
}