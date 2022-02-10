import React from "react";
import Comment from "./Comment";

function Comments({ comments }){


    //const totalComments = comments.length;    

    return(
        <div>
            <h2>{comments.length} Comments</h2>
            {comments.map((comment)=>{
                return <Comment key={comment.id} user={comment.user} opinion={comment.comment}/>})}
        </div>
    )
}

export default Comments;