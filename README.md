# GadgetHeaven - E-Commerce Website

Welcome to **GadgetHeaven**, an e-commerce platform where you can explore the latest gadgets, add them to your shopping cart, and manage your wishlist. The website is built using **React** and **Tailwind CSS** for styling, and leverages **React Router**, **Context API**, and custom hooks for state management.

## Live Website Link

You can check out the live version of the website here:

[Live Website Link](#)

## Requirement Document Link

For more details, check out the project's requirements and documentation here:

[Requirement Document Link](#)

## GitHub Repository

You can find the full project repository on GitHub here:

[Git Repository Link](#)

## Features

### 1. **Product Browsing**
- Browse through a variety of gadgets, each with detailed descriptions, prices, ratings, and specifications.
- The homepage features a clean, user-friendly layout with easy access to various categories and product listings.

### 2. **Add to Cart**
- Users can add products to their shopping cart.
- The cart icon in the navigation bar dynamically displays the number of items in the cart.
- Users can view, modify, and remove items from the cart.

### 3. **Add to Wishlist**
- Users can add products to their wishlist for future consideration.
- A wishlist icon shows the number of items saved for later.
- Wishlist items are saved even after page refreshes.

### 4. **Product Details Page**
- Clicking on a product shows its detailed description, including price, rating, and specifications.
- Users can directly add the product to their cart or wishlist from this page.

### 5. **Dynamic Navbar**
- The navbar dynamically updates based on the current route, highlighting the active page with distinct styles.
- Users can navigate easily between different sections such as "Home", "Cart", and "Wishlist".

## Technologies Used

- **React**: The website is built using React for a fast, component-based user interface.
- **React Router**: For handling routing and navigation between pages without full-page reloads.
- **Tailwind CSS**: For fast and responsive UI styling.
- **Context API**: For managing global state (like the cart and wishlist).
- **Custom Hooks**: To manage and organize state more efficiently, including custom hooks for cart and wishlist functionality.
- **CSS/SCSS**: Styled with Tailwind CSS for a clean and modern design.

## React Concepts Demonstrated

This project demonstrates various essential React concepts:

- **JSX**: Used for rendering HTML elements inside JavaScript.
- **Components**: Reusable and self-contained UI elements.
- **Props**: Passing data between components using props.
- **State**: Managing local component state using `useState`.
- **useEffect**: Performing side effects, like fetching data or updating the DOM.
- **useContext**: Sharing global state across the app using the Context API.
- **React Router**: Managing routing and navigation within the app.
- **Event Handling**: Managing user interactions such as button clicks and form submissions.
- **Lists and Keys**: Efficiently rendering dynamic lists of items using keys.

## Data Management

The app uses the **Context API** to manage and share global state for the shopping cart and wishlist. This allows different parts of the application to access and modify the state without needing to pass props down through the component tree.

- **CartContext**: Manages the shopping cart data, including adding/removing products and keeping track of the total number of items.
- **WishlistContext**: Manages the wishlist data, allowing users to save and remove products for future consideration.

