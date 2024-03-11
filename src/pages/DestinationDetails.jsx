import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DestinationDetails = () => {
    const { title, description } = useLoaderData();
    // console.log(title, description, img);
    return (
        <div className='max-w-screen-xl mx-auto min-h-[calc(100vh-80px)] flex items-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='text-white'>
                    <h1 className='text-3xl font-bold mb-5'>{title}</h1>
                    <p className='mb-5'>{description}</p>
                </div>
                {/* date picker */}
                <div className='lg:flex lg:justify-end'>
                    <div className="w-full bg-white rounded-md shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label htmlFor="origin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Origin</label>
                                    <input type="text" name="origin" id="origin" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dhaka" required="" />
                                </div>
                                <div>
                                    <label htmlFor="destination" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Destination</label>
                                    <input type="text" name="destination" id="destination" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={title} required="" readOnly />
                                </div>
                                <div className='grid grid-cols-2 gap-5'>
                                    <div>
                                        <label htmlFor="from" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From</label>
                                        <input type="date" id='from' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="to" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
                                        <input type="date" id='to' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center">Start Booking</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;