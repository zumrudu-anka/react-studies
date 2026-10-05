import React from 'react'

export default function Book({name, author}) {
    return (
        <div className = "book">
            <h2>{name}</h2>
            <h5>{author}</h5>
        </div>
    )
}
