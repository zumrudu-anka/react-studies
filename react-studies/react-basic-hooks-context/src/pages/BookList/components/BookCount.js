import React, {useContext} from 'react'
import {BookContext} from "../../../context/BookContext";
export default function BookCount({bookCount}) {
    
    let [books] = useContext(BookContext);

    const style = {
        color : "white",
        position : "absolute",
        bottom : 25,
        textAlign : "center"
    };

    return (
        <div style = {style}>
            Book Count : {bookCount}
            <br/><br/>
            Book Count from Provider : {books.length}
        </div>
    )
}
