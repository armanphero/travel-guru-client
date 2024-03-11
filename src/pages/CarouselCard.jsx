import React from 'react';

const CarouselCard = ({ destination, setId, activeDestination}) => {
    return (
        <img src={destination.img} className={`max-w-56 cursor-pointer ${activeDestination.id === destination.id ? 'carousel-active': ''}`} alt="" onClick={() => setId(destination.id)} />
    );
};

export default CarouselCard;