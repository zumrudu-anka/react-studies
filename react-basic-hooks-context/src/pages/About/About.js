import React from 'react';
import Props from './components/Props';
import Props2 from './components/Props2';

export default function About() {
    return (
        <div className = "aboutPage">
            <h2>Hakkımızda</h2>
            <br/><br/><br/>
            <Props
                name ="name"
                surname = "surname"
            />
            <Props2
                name = "name2"
                surname = "surname2"
                date = "date"
                age = {15}
            />
            <Props2
                name = "name2"
                surname = "surname2"
                date = "date"
            />
        </div>
    )
}
