import React, { useContext, useState } from 'react';
import { MdClose } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const { user, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSearch = (e) => {
        const value = e.target.value;
        console.log(value);
        const path = value ?  `/search/${value}` : '/'; 
        navigate(path);
        // navigate(`/search/arman`);
    }

    return (
        <nav className="header">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                    <SiYourtraveldottv className='text-white text-5xl' />
                    <h1 className="text-white text-2xl font-bold">Travel Guru</h1>
                </Link>
                {/* menu starts */}
                <div className={openMenu ? 'hidden' : 'flex'} onClick={() => setOpenMenu(!openMenu)}>
                    <button data-collapse-toggle="navbar-search" type="button" className="text-white border border-white rounded-sm inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="text-white w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={openMenu ? 'flex' : 'hidden'} onClick={() => setOpenMenu(!openMenu)}>
                    <button data-collapse-toggle="navbar-search" type="button" className="text-white border border-white rounded-sm inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">close main menu</span>
                        <MdClose className='text-7xl' />
                    </button>
                </div>
                {/* menu ends */}
                <div className={`relative mt-3 md:mt-0 md:w-fit ${openMenu ? 'w-full' : 'hidden md:flex'}`}>
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input onChange={handleSearch} type="text" id="search-navbar" className="bg-transparent block w-full py-2 px-5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 text-white dark:focus:border-blue-500" placeholder="Search your Destination..." />
                </div>
                <div className={`items-center justify-between md:flex md:w-fit ${openMenu ? 'w-full' : 'hidden'}`} id="">
                    <ul className="flex flex-col md:items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 bg-white md:bg-transparent rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <NavLink to='/'
                                className={({ isActive }) =>
                                    isActive
                                        ? "block py-2 px-3 md:text-[#f9a51a] rounded md:bg-transparent md:p-0 md:dark:text-blue-500 text-white bg-blue-700"
                                        : "block py-2 px-3 md:text-white rounded md:bg-transparent md:p-0 md:dark:text-blue-500"
                                }
                                aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'
                                className={({ isActive }) =>
                                    isActive
                                        ? "block py-2 px-3 md:text-[#f9a51a] rounded md:bg-transparent md:p-0 md:dark:text-blue-500 text-white bg-blue-700"
                                        : "block py-2 px-3 md:text-white rounded md:bg-transparent md:p-0 md:dark:text-blue-500"
                                }
                                aria-current="page">About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services'
                                className={({ isActive }) =>
                                    isActive
                                        ? "block py-2 px-3 md:text-[#f9a51a] rounded md:bg-transparent md:p-0 md:dark:text-blue-500 text-white bg-blue-700"
                                        : "block py-2 px-3 md:text-white rounded md:bg-transparent md:p-0 md:dark:text-blue-500"
                                }
                                aria-current="page">Services</NavLink>
                        </li>
                        {
                            user ?
                                <>
                                    <li className='relative'>

                                        <span className='text-white p-2 cursor-pointer bg-yellow-400 rounded-full' onClick={() => setOpenProfile(!openProfile)}>{user.email.slice(0, 2).toUpperCase()}</span>

                                        {/* <!-- Dropdown menu --> */}
                                        <div id="userDropdown" className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-7 ${openProfile ? '' : 'hidden'}`}>
                                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                                <div className="font-medium truncate">{user.email}</div>
                                            </div>
                                            <div className="py-1">
                                                <button className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={() => logoutUser()}>Sign out</button>
                                            </div>
                                        </div>

                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <Link to='/login' type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900">Login</Link>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;