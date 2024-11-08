# BookStore - E-Commerce Website

Welcome to **BookStore**, an online platform where you can browse a wide collection of books, manage your reading list, and keep track of your wishlist. The website is built using **React** and **Tailwind CSS** for styling, and utilizes **React Router**, **Context API**, and custom hooks for efficient state management.

## Live Website Link

You can check out the live version of the website here:

[Live Website Link](#)

## GitHub Repository

You can find the full project repository on GitHub here:

[Git Repository Link](https://github.com/RakibHassan11/BookStore.git)

## Features

### 1. **Product Browsing**
- Browse a wide variety of books with detailed descriptions, authors, genres, ratings, and page count.
- The homepage showcases different categories and featured books for easy exploration.

### 2. **Add to Read List**
- Users can mark books as "Read" and add them to their read list.
- The read list icon dynamically displays the number of books marked as read.
- Users can view, manage, and remove books from the read list.

### 3. **Add to Wishlist**
- Users can save books to their wishlist for future reading.
- The wishlist icon shows the number of books saved for later consideration.
- Wishlist items are persisted even after a page refresh.

### 4. **Book Details Page**
- Clicking on a book displays its detailed description, author information, ratings, and total pages.
- Users can add the book to their read list or wishlist directly from the details page.

### 5. **Dynamic Navbar**
- The navbar dynamically updates based on the current route, highlighting the active page with distinct styles.
- Users can navigate between different sections like "Home", "Read List", and "Wishlist".

## Technologies Used

- **React**: The website is built using React to create a fast, component-based user interface.
- **React Router**: For handling routing and navigation between pages without full-page reloads.
- **Tailwind CSS**: Used for styling the app, providing a clean and responsive UI design.
- **Context API**: For managing global state, like the read list and wishlist, across components.
- **Custom Hooks**: Used to manage and organize state efficiently, including custom hooks for cart, read list, and wishlist functionality.
- **LocalStorage**: Persisting the read list and wishlist data using localStorage to ensure data is saved even after page refreshes.

## React Concepts Demonstrated

This project demonstrates various React concepts, including:

- **JSX**: Used for rendering HTML elements within JavaScript.
- **Components**: Building reusable components that encapsulate different parts of the UI.
- **Props**: Passing data between components using props to maintain flexibility.
- **State**: Managing local state within components using `useState`.
- **useEffect**: Handling side effects such as fetching data or updating the DOM.
- **useContext**: Sharing global state (like the cart, read list, and wishlist) across multiple components via Context API.
- **React Router**: Navigating between pages using React Router for single-page app functionality.
- **Event Handling**: Handling user interactions, including adding books to the cart, wishlist, and read list.
- **Lists and Keys**: Dynamically rendering lists of books and managing keys for efficient rendering.

## Data Management

The app uses **Context API** to manage and share global state, specifically for the read list and wishlist, which allows various components to interact with the data without passing props manually through the component tree.

- **ReadListContext**: Manages the state of books that have been marked as "read". Users can add or remove books from their read list.
- **WishlistContext**: Handles the state of books users wish to read in the future, allowing easy addition and removal of books.

## Getting Started

To get started with the project locally:

1. Clone the repository:

```bash
git clone <https://github.com/RakibHassan11/BookStore.git>
