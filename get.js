import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Post from "./post";

const Get = () => {
    const [gets, setgets] = useState([]);
    const [userId, setuserId] =useState();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(x => setgets(x.data))
            .catch(x => console.error(x))
            .finally(<h4>GET - Good Job 👍 </h4>)
    }, [])
    return <Fragment>
        <h3>Calls Servers</h3>
        {gets.map(x => <div> <h5>{x.name}</h5>
        {
           x.id == userId ? <Post userId ={x.id}/>:
          <button onClick={()=> setuserId(x.id)}> Show-Posts</button>
        }
        </div>)}
    </Fragment>
}
export default Get;