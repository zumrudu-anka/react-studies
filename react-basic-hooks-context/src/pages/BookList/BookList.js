import React, {useEffect, useContext} from 'react';
import Book from './components/Book';
import {BookContext} from "../../context/BookContext";

export default function BookList({myFunc}) {
    
    let [books] = useContext(BookContext);

    // const [books] = useState([
    //     {
    //         id : 1,
    //         name : "Bunu Herkes Bilir",
    //         author : "Emrah Safa GÜRKAN"
    //     },
    //     {
    //         id : 2,
    //         name : "Zafer Sızlanarak Kazanılmaz",
    //         author : "Haluk TATAR"
    //     }
    // ]);

    useEffect(() => {
        myFunc(books.length);
    });

    return (
        <div className = "bookListPage">
            {/* <h1>Book List</h1>
            {
                books.map(book =>(
                    <Book
                        key = {book.id}
                        name = {book.name}
                        author = {book.author}
                    />
                ))
            } */}
            {/* {value} */}
            <h2>Kitap Listesi</h2>
            {
                books.map(book =>(
                    <Book
                        key = {book.id}
                        name = {book.name}
                        author = {book.author}
                    />
                ))
            }
        </div>
    )
}
