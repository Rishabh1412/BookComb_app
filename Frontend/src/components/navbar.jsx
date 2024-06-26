import React, { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

function Navbar() {
  
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();


  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/course?query=${inputValue}`);
  };

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Books</a></li>
      <li><a href="/about">About</a></li>
    </>
  );

  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${sticky ? 'sticky-navbar shadow-md bg-neutral-900 duration-300 transition-all ease-in-out' : ''}`}>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="/" className='text-white hover:bg-yellow-400 hover:text-black'>Home</a></li>
                <li><a href="/course" className='text-white hover:bg-yellow-400 hover:text-black'>Books</a></li>
                <li><a href="/about" className='text-white hover:bg-yellow-400 hover:text-black'>About</a></li>
              </ul>
            </div>
            <a className="text-2xl font-bold text-yellow-300">BookComb</a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 bg-neutral-700">
                <li><a href="/">Home</a></li>
                <li><a href="/course">Books</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </div>
            <div className="hidden md:block">
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <input
                  type="text"
                  className="grow border rounded-md border-none bg-neutral-800 px-3 py-2 text-sm"
                  placeholder="Book name....."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" className=" bg-transparent text-yellow-300 border text-sm border-yellow-300 px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black duration-300">
                  Search
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
