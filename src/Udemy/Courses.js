import React from 'react'
import Course from './Course'
const coursesData =
    [
        {
            "title": "complete react developer in 2020",
            "description": "learn about react,redux,hooks",
            "author": "ANDREI NEAGOOIE",
            "image":"https://i.udemycdn.com/course/240x135/2365628_0b60_7.jpg"
        },
        {
            "title": "Server side rendering with react",
            "description": "learn about server side process",
            "author": "STEPHEN GRIDER",
            "image":"https://i.udemycdn.com/course/240x135/1383496_caab_4.jpg"
        },
        {
            "title": "Advanced react and redux",
            "description": "learn about advance concepts of react",
            "author": "JOHN ELDER",
            "image":"https://i.udemycdn.com/course/240x135/781532_8b4d_6.jpg"
        }
    ]
const Courses = () => {
    let coursesList = coursesData.map(course => {
        return (
            <Course title={course.title} desc={course.description} author={course.author} image={course.image} />
        );
    });
    return <div>{coursesList}</div>;
};
export default Courses;