import React, { useState } from "react";
import video from "../data/video";
import Description from "./Description";
import Buttons from "./Buttons";
import Comments from "./Comments";

function App() {
  //console.log("Here's your data:", video);
  const [hide, setHide] = useState(true)


  function handleHide(e){
    e.target.innerText = hide === true ? "Hide Comments" : "Show Comments"; 
    setHide(!hide)
  }
 

  return (
    <div className="App">
       <iframe 
       width="853" 
       height="480" 
       src={video.embedUrl} 
       title={video.title} 
       frameborder="0" 
       allowfullscreen />

       <Description title={video.title} views={video.views} date={video.createdAt} />
       <Buttons upvotes={video.upvotes} downvotes={video.downvotes} handleHide={handleHide} />
       <Comments comments={hide === true? video.comments : []} /> 

    </div>
  );
}

export default App;
