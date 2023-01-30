import React, {useEffect, useRef} from 'react'

export default function Sections({section}) {
    const sectionRef = useRef();

    // useEffect(() => {
    //     sectionRef.current.style.backgroundColor = "orange";
    // }, []);

    return (
    <>
        <div className="sections" ref={sectionRef} style={section.styleBackground}>
            
            <div className="sections-content" style={section.styleFlex}>
                <article>
                    <h1>{section.title}</h1>
                    <p>{section.content}</p>
                </article>

                <img alt={section.image_description} src={section.image} />
            </div>
        </div>
    </>
  )
}
