import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../Utiity/addToDb';

const BookDetail = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);
    // console.log(book) 
    
    const {bookId:currentBookId, image} = book;
    const handleMarkAsRead = (id) =>{
        //1. Uderstand what to store: => bookId
        //2. Where to store: database
        //3. Array, List, Collection
        //4. Check: If the book is already in the list
        //5. If not then add the book
        //6.If yes do not add the book
        addToStoredReadList(id);

        
    }



    return (
        <div className='my-12'>
            <h2>Book Details: {bookId}</h2>
            <img className='w-36' src={image} alt="" />
            <br />
            <button onClick={()=> handleMarkAsRead(bookId)} className="btn mr-4">Mark As Read</button>
            <button className="btn btn-accent">Add to WishList</button>
        </div>
    );
};

export default BookDetail;