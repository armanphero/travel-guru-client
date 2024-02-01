import React, { useEffect, useState } from 'react';
import TrendingNews from '../TrendingNews/TrendingNews';

const MainContent = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/trending')
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className='d-flex flex-column gap-4'>
            {
                news.map(singleNews => <TrendingNews key={singleNews._id} singleNews={singleNews}></TrendingNews>)
            }
        </div>
    );
};

export default MainContent;