import React from "react";

function Comment({ user, opinion }){
    return(
        <div>
            <h3>{user}</h3>
            <p>{opinion}</p>
        </div>
    )
}

export default Comment;