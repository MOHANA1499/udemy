import React from "react"
import '../Udemy/Course.css'
const Course=(props)=>
{
    return(
        <div className="style"> 
            <img src = {props.image} className="imgstyle"/>
            <h2>{props.title}</h2>
            <h3>{props.desc}</h3>
            <h4>{props.author}</h4>
            <button onSubmit>Add to cart</button>
        </div>
    )
}
export default Course;