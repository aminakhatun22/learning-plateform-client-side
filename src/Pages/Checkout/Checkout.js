import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    console.log(course)
    return (
        <div>
            <h1>this is {course.courseName} checkoout route</h1>
        </div>
    );
};

export default Checkout;