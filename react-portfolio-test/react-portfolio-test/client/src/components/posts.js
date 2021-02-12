import React, { Component, useContext } from 'react';
import { Button, Jumbotron } from 'reactstrap';
import '../App.css';
// import SinglePost from '../components/singlepost'; 
import {PostContext} from '../context/PostContext';



const Posts = () =>  {

  const {posts, fetchActivePosts, requestCount} = useContext(PostContext);

 if(posts.length < 1 && requestCount === 0) fetchActivePosts();

  return (
    <div className="outerPostDiv">
       <Jumbotron className="postJumbotron">
           <h1 className="postPageHeader">News</h1>
           <p className="postPageHeader">Whats new with us.</p>
           <div>
             {posts.map (posts => {
               return (
                 <div className="singlePost">
                   <h1 className="singlePostTitle">{ posts.title }</h1>
                    <hr className="postHr" />
                    <p className="singlePostBody" >{posts.content}</p>
                 </div>
               )
             })}
           </div>
              {/* <SinglePost title='First Post' description='This is my first post' body='this is the body.'></SinglePost> */}
           
       </Jumbotron>
   </div>
  );
}



export default Posts;
