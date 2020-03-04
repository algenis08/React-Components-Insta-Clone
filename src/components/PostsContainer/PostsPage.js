//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
import { useState } from "react";
import dummyData from "../../dummy-data";
// import data 

const PostsPage = () => {
const [data, setData] = useState(dummyData);
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {data.map((igPost,index) =>(
       <Post key={index} post={igPost} />
      ))};
    </div>
  );
};

export default PostsPage;

