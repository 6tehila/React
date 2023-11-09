import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import { Fragment } from "react";

const schema = yup.object({
    title: yup.string().required(),
    body: yup.string().required(),
}).required();
export default function Add_Edit({ userId, addPost, post}) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        values: post
    });
    const onSubmit = (data) => {
        if (post) {
            axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data)
                .then(x => {
                    console.log(x.data)
                    addPost(x.data)
                }).catch(err => console.log(err))
        }
        else {
            data.userId = userId;
            axios.post("https://jsonplaceholder.typicode.com/posts", data)
                .then(x => {
                    console.log(x.data)
                    addPost(x.data)
                }).catch(err => console.log(err))
        }
    }
    return <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Title</label>
            <input {...register("title")} />
            <p>{errors.title?.message}</p>
            <label>Body</label>
            <input {...register("body")} />
            <p>{errors.body?.message}</p>
            <input type="submit" value={post ? "Edit" : "Add"} />
        </form>
   </Fragment>
}
