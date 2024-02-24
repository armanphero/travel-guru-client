import React, { useEffect, useState } from 'react';
import TrendingNews from '../TrendingNews/TrendingNews';
import { useLoaderData, useParams } from 'react-router-dom';

const MainContent = () => {
<<<<<<< HEAD
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/trending')
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(error => console.log(error))

        fetch('https://raw.githubusercontent.com/armanphero/the-dragon-news-server/master/data/categories.json')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }, [])
=======
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
>>>>>>> 8042730ec702eb704493057d2bdd316b9754df2b
    return (
        <div className='d-flex flex-column gap-4'>
            {
                news.map(singleNews => <TrendingNews key={singleNews._id} singleNews={singleNews}></TrendingNews>)
            }
        </div>
    );
};

export default MainContent;