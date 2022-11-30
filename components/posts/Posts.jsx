import Post from "./Post";
import {useState, useEffect} from "react";

import { onSnapshot, collection, query, orderBy} from '@firebase/firestore'
import {db} from "../../firebase";


function Posts() {

    const [posts, setPosts] = useState([]);
    console.log(posts)
    useEffect(() =>
        onSnapshot(
            query(collection(db,'posts'), orderBy('timestamp','desc')),
            snapshot => {
                                setPosts(snapshot.docs)
                                }
            )
    ,[db])

    return (
        <div>
            { posts.map(post => (
                <Post key={post.id} {...post.data()}/>
            ))}
        </div>
    )
}

export default Posts;
