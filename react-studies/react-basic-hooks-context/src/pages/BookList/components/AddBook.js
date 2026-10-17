import React, {useState, useContext} from 'react';
import {BookContext} from "../../../context/BookContext";

export default function AddBook() {
    
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    
    let [books, setBooks] = useContext(BookContext);

    let updateName = (e) => {
        setName(e.target.value);
    }

    let updateAuthor = (e) => {
        setAuthor(e.target.value);
    }

    let addBook = (e) => {
        e.preventDefault();
        if(name.length < 1 || author.length < 1){
            return;
        }
        let id = books.length + 1;
        setBooks([...books,{id, name, author}]);
    }

    return (
        <form onSubmit = {addBook} className = "addBookForm">
            <legend>Add Book</legend>
            <input type="text" name = "book-name" value = {name} onChange = {updateName} placeholder = "Name"/>
            <input type="text" name = "book-author" value = {author} onChange = {updateAuthor} placeholder = "Author"/>
            <button type="submit">Add</button>
        </form>
    )
}
