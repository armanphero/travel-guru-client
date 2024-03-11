import React, { useEffect, useState } from 'react';
import CarouselCard from './CarouselCard';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Carousel = () => {
    const [id, setId] = useState('');
    const [destinations, setDestinations] = useState([]);
    const images = [
        'https://i.postimg.cc/7YKHpmGD/Sajek.png',
        'https://i.postimg.cc/NfsGJW0p/Sreemongol.png',
        'https://i.postimg.cc/2ywkjx0Q/sundorbon.png',
    ]
    useEffect(() => {
        fetch('http://localhost:3000/destinations/')
            .then(res => res.json())
            .then(data => setDestinations(data))
            .catch(error => console.log(error))
    }, [])
    const activeDestination = destinations.find(destination => destination.id === (id || 'C0x5B'));
    // console.log(activeDestination);
    return (
        <>
            <div className='max-w-screen-xl mx-auto min-h-[calc(100vh-80px)] flex items-center'>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='text-white'>
                        {
                            activeDestination &&
                            <>
                                <h1 className='text-3xl font-bold mb-5'>{activeDestination.title}</h1>
                                <p className='mb-5'>{activeDestination.description}</p>
                                <Link to={`/destination/${activeDestination.id}`} type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900 flex items-center w-fit">Booking <FaArrowRight className='ml-2' /></Link>
                            </>
                        }
                    </div>
                    <div className='flex flex-col md:flex-row gap-5'>
                        {
                            destinations.map((destination) => <CarouselCard key={destination.id} destination={destination} setId={setId} activeDestination={activeDestination}></CarouselCard>)
                        }
                    </div>
                </div>
            </div>
        </>

    );
};

export default Carousel;