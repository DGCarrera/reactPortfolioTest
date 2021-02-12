import React, {createContext, useState} from 'react'

export const PostContext = createContext();

const PostContextProvider = (props) => {
    const [requestCount, setRequestCount] = useState(0);
    const [posts, setPosts ] = useState ([
    // { title: 'First post', body: 'This is my first post', description: 'This is my first post.'},
    // { title: 'Second post', body: 'This is my second post', description: 'This is my second post.'},
    // { title: 'Third post', body: 'This is my third post', description: 'This is my third post.'}
    
    ]);

    const fetchActivePosts = () => {
	setRequestCount(requestCount+1);
        fetch('/updates').then(res => res.json()).then(data => setPosts(data)).catch(err => console.error(err))
    }

    return (
        <PostContext.Provider value={{posts, fetchActivePosts, requestCount}} >
            {props.children}
        </PostContext.Provider>
    );
    
    
}

export default PostContextProvider ;
