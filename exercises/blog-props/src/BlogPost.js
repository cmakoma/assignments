import React from "react"


const BlogPost = (props) =>{
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.subTitle}</h3>
            <p>posted by {props.author}on {props.date}</p>

        </div>
    )
}

export default BlogPost