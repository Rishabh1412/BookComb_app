import React, { useEffect, useState } from 'react';
import Cards from './cards';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const API_KEY = 'AIzaSyDJQvDPNn29swXc2q96tJE--PxrT_DlN44';


function Course() {
  const [books, setBooks] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('query') || 'stories'; // Default to 'manga' if no query is provided

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
          params: {
            q: query,
            key: API_KEY,
          },
        });
        setBooks(response.data.items);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    getBooks();
  }, [query]);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-24 px-4">
      <div className="pt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl text-white ">
          We are happy to see you here, <span className="text-yellow-400">BookBee!</span>
        </h1>
       
        <Link to="/">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-700 duration-300 mt-6">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-2 md:text-sm md:gap-0 md:grid-cols-4">
        {books.length > 0 ? (
          books.map((book) => (
            <Cards key={book.id} item={book} />
          ))
        ) : (
          <p className='text-gray-400'>No books found</p>
        )}
      </div>
    </div>
  );
}

export default Course;
