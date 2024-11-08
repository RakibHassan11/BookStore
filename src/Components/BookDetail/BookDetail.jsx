import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../Utiity/addToDb'; // Assuming you have a similar function for the wishlist
import { addToStoredWishList } from '../../Utiity/addToDb';

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);
    if (!book) {
        return <p>Book not found</p>; // Handle case where book is not found
    }

    const { bookId: currentBookId, image } = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    };

    const handleAddToWishList = (id) => {
        // Implement your logic to add to wishlist here
        // For now, you can call a utility function similar to `addToStoredReadList`
        console.log(`Added book with ID ${id} to wishlist`);
        addToStoredWishList(id); // Uncomment this line if you have this utility function
    };

    return (
        <div className='my-12'>
            <h2>Book Details: {bookId}</h2>
            <img className='w-36' src={image} alt="Book Cover" />
            <br />
            <button onClick={() => handleMarkAsRead(bookId)} className="btn mr-4">Mark As Read</button>
            <button onClick={() => handleAddToWishList(bookId)} className="btn btn-accent">Add to WishList</button>
        </div>
    );
};

export default BookDetail;
