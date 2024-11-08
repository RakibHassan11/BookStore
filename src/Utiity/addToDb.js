import { toast } from "react-toastify";

// Function to get the stored read list from localStorage
const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    } else {
        return [];
    }
};

// Function to add a book ID to the stored read list
const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        // If the book ID already exists, log and do not add it
        console.log(id, 'already exists in the read list');
    } else {
        storedList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedList));
        // Display a notification to the user
        toast('This book is added to your read list.');
    }
};

// Function to get the stored wishlist from localStorage
const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        return JSON.parse(storedWishListStr);
    } else {
        return [];
    }
};

// Function to add a book ID to the stored wishlist
const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        // If the book ID already exists, log and do not add it
        console.log(id, 'already exists in the wish list');
    } else {
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
        // Display a notification to the user
        toast('This book is added to your Wish list.');
    }
};

export { getStoredReadList, addToStoredReadList, getStoredWishList, addToStoredWishList };
