import React, { useEffect, useState } from 'react';
import TrendingNews from '../TrendingNews/TrendingNews';
import { useLoaderData, useParams } from 'react-router-dom';

const MainContent = () => {
    // const [news, setNews] = useState([]);
    const news = useLoaderData();

    // useEffect(() => {
    //     fetch('http://localhost:3000/trending')
    //         .then(res => res.json())
    //         .then(data => setNews(data))
    //         .catch(error => console.log(error))

    //     fetch('http://localhost:3000/categories')
    //         .then(res => res.json())
    //         // .then(data => console.log(data))
    //         .catch(error => console.log(error))
    // }, [])
    return (
        <div className='d-flex flex-column gap-4'>
            {
                news.map(singleNews => <TrendingNews key={singleNews._id} singleNews={singleNews}></TrendingNews>)
            }
        </div>
    );
};

export default MainContent;