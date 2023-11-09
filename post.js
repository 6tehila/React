import axios from "axios";
import { Fragment, useEffect, useId, useState } from "react";
import Comment from "./comment";
import Add_Edit from "./add_edit"

const Post = ({ userId }) => {
    const [posts, setPosts] = useState([]);
    const [userComment, setuserComment] = useState();
    const [selectedEdit, setselectedEdit] = useState();
    const [newadd, setnewadd] = useState(false)

    useEffect(() => {
        setuserComment(null)
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(x => {
                setPosts(x.data)
            })
            .catch(x => console.error(x))
            .finally(<h4>POST - Good Job 👍 </h4>)
        return () => {
        }

    }, [userId])

    const addPost = (post) => {
        const newPost = [...posts]
        newPost.push(post);
        setPosts(newPost);
        setnewadd(false);
    }

    const editPost = (post) => {
        const newPost = [...posts]
        const findIndex = newPost.findIndex(x => x.id === post.id);
        newPost[findIndex] = post;
        setPosts(newPost);
        setselectedEdit(null);
    }

    return <Fragment>
       
        {posts.map(x => <div>
            
            {x.title}
            {x.id === selectedEdit ? <Add_Edit post={x} addPost={editPost} /> : null}
            <button onClick={() => setselectedEdit(x.id)}>Edit</button>
            <button onClick={() => setuserComment(x.id)}>Show-Comment</button>
        </div>)}
        {setuserComment ? <Comment commentId={userComment} /> : null}
        {newadd ? <Add_Edit userId={userId} addPost={addPost} /> :
            <button onClick={() => setnewadd(true)}>Add New</button>}
        <hr></hr>

    </Fragment>
}
export default Post;