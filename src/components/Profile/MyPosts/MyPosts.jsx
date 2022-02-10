import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <ul className={style.list}>
                <li className={style.item}>
                    MY POSTS
                </li>
                <textarea> Create your post</textarea>
                <button>New post</button>
                <button>Delete post</button>
            </ul>
            <Post message='Hi, how are you?' like='5' />
            <Post message='How are you?' like='10' />
        </div>


    );
}

export default MyPosts;