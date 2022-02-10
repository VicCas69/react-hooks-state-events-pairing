import React, { useState } from "react";

function Buttons({upvotes, downvotes, handleHide }){

    const [likes, setLikes] = useState(upvotes);
    const [dislikes, setDislikes] = useState(downvotes);
    
    function handleLikes(e){
        const newLikes = parseInt(e.target.value) +1;
        setLikes(newLikes)
    }

    function handleDislikes(e){
        const newDislikes = parseInt(e.target.value) +1;
        setDislikes(newDislikes)
    }

    return (
        <div>
            <p>
            <button onClick={handleLikes} value={likes} >{likes} 👍</button>
            <button onClick={handleDislikes} value={dislikes}>{dislikes} 👎</button>
            </p>
            <p>
            <button onClick={handleHide}>Hide Comments</button>
            </p>
        </div>
    )

}

export default Buttons;
