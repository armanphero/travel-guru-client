import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Categories = () => {
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategoriesData(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h4 className='fs-5 font-semibold mb-3'>All Caterogy</h4>
            {/* <div className='d-flex justify-content-center'> */}
            <div className='d-flex flex-column gap-1'>
                {
                    categoriesData.map(category => <NavLink to={category.name === 'All News' ? '/' : category.name} key={category.id} className={({ isActive }) => isActive ? 'bg-gray text-secondary font-bold fs-5 text-decoration-none rounded py-2 px-5' : 'text-secondary font-bold fs-5 text-decoration-none rounded py-2 px-5'}>{category.name}</NavLink>)
                }
            </div>
            {/* </div> */}
        </div>
    );
};

export default Categories;