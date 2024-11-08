import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {

    const {image, bookName, author, tags, category, bookId, rating, totalPages} = book;


    return (
        <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className='bg-blue-100 py-8 rounded-2xl'>
            <img
            src={image}
            alt={bookName}
            className='h-[166px]'
            />
        </figure>
        <div className="card-body">
            <div className='flex justify-center gap-4 '>
                {
                tags.map((tag, index) => <button key={index} className="btn btn-xs bg-green-100 text-green-700">{tag}</button>)
                }
            </div>
            <h2 className="card-title">
            {   bookName}
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{author}</p>
            <div className="border-t-2 border-dashed"></div>
            <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div>{rating}</div>
            <div>{totalPages}</div>
            <div className="rating">
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
            </div>
            </div>
        </div>
        </div>
        </Link>
    );
};

export default Book;