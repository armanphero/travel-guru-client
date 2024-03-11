import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const SearchedCard = ({ item }) => {
    // console.log(item);
    const { description, location, price, img, title, ratings } = item;
    return (
        <>
            <Link href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description.slice(0, 100) + '...'}</p>
                    <span className=''><span className='font-semibold'>Location: </span>{location}</span>
                    <div className='flex justify-between'>
                        <span className=''><span className='font-semibold'>Price: </span>${price}</span>
                        <span className='flex items-center gap-1'><FaStar className='text-yellow-400' />{ratings}</span>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default SearchedCard;