import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SearchedCard from './SearchedCard';
import MapCompo from './MapCompo';

const Searched = () => {
    const searchedDate = useLoaderData();
    // console.log(searchedDate);
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-5'>
                    {
                        searchedDate.length ?
                            searchedDate.map((item, index) => <SearchedCard key={index} item={item}></SearchedCard>) :
                            <h1 className='text-3xl font-bold mb-5 text-yellow-400'>No Results Found</h1>
                    }

                </div>
                {
                    searchedDate.length &&
                    <MapCompo />
                }
            </div>
        </div>
    );
};

export default Searched;