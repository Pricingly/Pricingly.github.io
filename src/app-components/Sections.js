import React, {useEffect, useState} from 'react'

export default function Sections({section}) {

    const [style, setStyle] = useState()
    
    useEffect(() => {

        // If reverse is set to true, then set the style to row-reverse the section
        if (section.reverse === true){
            setStyle((prevState) => {
                return {
                    ...prevState,
                    flexDirection: "row-reverse",
                    display: "flex"
                }
            });
        }
    }, [section.reverse]);

    console.log(style)

    return (
    <>
        <div className="sections" style={style}>
            <article>
                <h1>{section.title}</h1>
                <p>{section.content}</p>
            </article>

            <img alt={section.image_description} src={section.image} />
        </div>
    </>
  )
}
