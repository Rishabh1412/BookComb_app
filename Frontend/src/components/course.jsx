import React, { useEffect, useState } from 'react';
import Cards from './cards';
import { Link } from "react-router-dom";
import axios from 'axios';

const API_KEY = "AIzaSyDJQvDPNn29swXc2q96tJE--PxrT_DlN44";

function Course() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        console.log('Fetching books from API...');
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
          params: {
            q: 'avengers', // Example query, you can customize it
            key: API_KEY,
          },
        });
        console.log('Books fetched:', response.data.items);
        setBooks(response.data.items);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    getBooks();
  }, []);

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-24 px-4'>
      <div className='mt-20 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>
          Weeeee, happy to see you here <span className="text-pink-500">BookBee! :)</span>
        </h1>
        <p className='mt-12'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita asperiores inventore assumenda laborum illum sapiente velit maxime, unde co
        </p>
        <Link to="/">
          <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>
            Back
          </button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {books.length > 0 ? (
          books.map((book) => (
            <Cards key={book.id} item={book} />
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
}

export default Course;
