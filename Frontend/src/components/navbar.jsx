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
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
    </>
  );

  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${sticky ? 'sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out' : ''}`}>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navItems}
              </ul>
            </div>
            <a className="text-2xl font-bold">BookComb</a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navItems}
              </ul>
            </div>
            <div className="hidden md:block">
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <input
                  type="text"
                  className="grow border rounded-md px-3 py-2"
                  placeholder="Search"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
                  Search
                </button>
              </form>
            </div>
            <Link to='/login'>
            <button className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
