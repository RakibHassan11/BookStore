import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../../Utiity/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);  // Add a state for wish list
    const [sort, setSort] = useState('');

    const allBooks = useLoaderData();

    // Fetch read list and wish list on component mount
    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);

        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const wishBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId));
        setWishList(wishBookList);
    }, [allBooks]);

    // Handle sorting
    const handleSort = sortType => {
        setSort(sortType);

        if (sortType === 'No of Pages') {
            const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedReadList);
        }
        if (sortType === 'Ratings') {
            const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedReadList);
        }
    }

    return (
        <div>
            <h3 className='text-3xl my-8'>Listed Books</h3>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    {sort ? `Sort by: ${sort}` : 'Sort by'}
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Ratings')}><a>Rating</a></li>
                    <li onClick={() => handleSort('No of Pages')}><a>No of Pages</a></li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I Read: {readList.length}</h2>
                    {readList.map(book => <Book key={book.bookId} book={book} />)}
                </TabPanel>

                <TabPanel>
                    <h2 className='text-2xl'>My Wish List: {wishList.length}</h2>
                    {wishList.map(book => <Book key={book.bookId} book={book} />)}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
