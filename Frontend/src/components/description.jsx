import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const apiKey = "AIzaSyDJQvDPNn29swXc2q96tJE--PxrT_DlN44";

function Description() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`, {
          params: { key: apiKey },
        });
        setBook(response.data.volumeInfo);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) return <div className='h-screen w-screen flex justify-center items-center text-xl'>Loading...</div>;

  return (
    <div className='bg-black h-max p-8'>
    <div className="max-w-screen-lg mx-auto bg-neutral-900 text-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-xl"
            src={book.imageLinks?.thumbnail}
            alt={`Cover of ${book.title}`}
          />
        </div>
        <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-2 text-yellow-300">{book.title}</h2>
          {book.subtitle && <h3 className="text-xl font-semibold mb-2">{book.subtitle}</h3>}
          <p className="text-gray-400 mb-2">
            <strong>Authors:</strong> {book.authors?.join(', ')}
          </p>
          <p className="text-gray-400 mb-2">
            <strong>Publisher:</strong> {book.publisher}
          </p>
          <p className="text-gray-400 mb-2">
            <strong>Published Date:</strong> {book.publishedDate}
          </p>
          <p className="text-gray-400 mb-4">
            <strong>Page Count:</strong> {book.pageCount}
          </p>
          <p className="text-gray-400 pb-4">{book.description}</p>
          <div className="flex space-x-4">
            <a href={book.infoLink} target="_blank" rel="noopener noreferrer" className="btn bg-yellow-400 hover:bg-yellow-700 text-black">
              More Info
            </a>
            <a href={book.previewLink} target="_blank" rel="noopener noreferrer" className="btn bg-neutral-900 border border-yellow-400 text-yellow-400 hover:bg-yellow-200 hover:text-black duration-300">
              Preview
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Description;
