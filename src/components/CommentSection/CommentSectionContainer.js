// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";


const CommentSection = props => {

  [comments] = useState(props.comments)

  return (
    <div>
      {props.comments.map((cmt, index)=> 
       <Comment key={index} comment={cmt}/>
      )}

      <CommentInput />
    </div>
  );
};

export default CommentSection;
