import React, { Component, useContext } from 'react';
import { Button, Card } from 'reactstrap';
import '../App.css';



const Singlepost = (props) => {
    return (
        <div>
       <Card className="singlePost">
            <h1 className="singlePostTitle">{props.title}</h1>
            <hr className='postHr'/>
            <p className="singlePostBody">{props.description}</p>
           <p className="singlePostBody">{props.body}</p>
           
       </Card>
   </div>
    )
}

export default Singlepost

