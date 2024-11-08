import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {


    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/src/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    
    return (
        <div>
            <h2 className="text-5xl font-bold text-center">Books</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-16'>
               {
                 books.map(book => <Book book={book} key={book.bookId}></Book> )
               }
            </div>
        </div>
    );
};

export default Books;

// 1. State to store the books
// 2. useEffect
// 3. fetch to load data
// 4. set data to book state