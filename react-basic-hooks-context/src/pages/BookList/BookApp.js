import React, {useState} from 'react';
import {BookProvider} from "../../context/BookContext";
import BookList from './BookList';
import BookCount from './components/BookCount';
import AddBook from "./components/AddBook";

export default function BookApp() {

    const [bookCount, setBookCount] = useState(0);

    const myFunc = (count) => {
        setBookCount(count);
    }

    return (
        <BookProvider>
            <AddBook/>
            <BookList myFunc={myFunc}/>
            <BookCount bookCount = {bookCount}/>
        </BookProvider>
    )
}
