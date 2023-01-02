import React from 'react'

export default function Question({data}) {
    return (
        <>
            <div className="questionnaire">
                <h1>{data.question}</h1>
                <article>
                    {data.response}
                </article>
            </div>
        </>
    )
}
