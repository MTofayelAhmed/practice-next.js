import React from 'react';

const SingleBlog = ({params}) => {
    console.log(params.segments)
    const [year, id]= params.segments || []
    return (
        <div>
            <h2> singleBlog {year } for id {id}</h2>
        </div>
    );
};

export default SingleBlog;