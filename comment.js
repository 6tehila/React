import { Fragment, useState ,useEffect } from "react"
import axios from "axios";

const Comment =({commentId})=>{
    console.log("sdf",commentId)
    const [comments, setcomments] =useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${commentId}`)
        .then(x => setcomments(x.data))
            .catch(x => console.error(x))
            .finally(<h4>GET - Good Job 👍 </h4>)
    }, [commentId])
    return<Fragment>
    {comments.map(x => <div>{x.name}</div>)}
    </Fragment> 
}
export default Comment;