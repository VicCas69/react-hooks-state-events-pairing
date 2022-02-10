import React from "react";

function Description({title, views, date}){
    return (
        <div>
            <h1>{title}</h1>
            <div>{views} | Uploaded {date}</div>
        </div>
    )
}

export default Description;