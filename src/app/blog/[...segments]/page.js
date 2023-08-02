import React from 'react';
import SideBar from './../../dashboard/SideBar';

const SingleBlog = ({params, searchParams}) => {
    console.log(params.segments)
    const [year, id]= params.segments || []
    return (
        <div>
            <h2> singleBlog {year || new Date().getFullYear() } for  {id}</h2>
            <br></br>
            {
                searchParams.title
            }
        </div>
    );
};

export default SingleBlog;