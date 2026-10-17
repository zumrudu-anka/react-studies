import React, {useState, createContext} from "react";

export const BookContext = createContext();

export const BookProvider = props =>{
    
    const [books, setBooks] = useState([
        {
            id : 1,
            name : "Bunu Herkes Bilir",
            author : "Emrah Safa GÜRKAN"
        },
        {
            id : 2,
            name : "Zafer Sızlanarak Kazanılmaz",
            author : "Haluk TATAR"
        }
    ]);
    
    return (
        <BookContext.Provider value = {[books, setBooks]}>
            {props.children}
        </BookContext.Provider>
    )
}