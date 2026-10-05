import React from 'react'

export default function Props2({name, surname, date, age = 12}) {
    return (
        <div>
            {name} - {surname} - {date} - {age}
        </div>
    )
}
