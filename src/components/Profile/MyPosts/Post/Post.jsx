import React from 'react';
import style from './Post.module.css'


const Post = (props) => {
    return (
        <div className={style.item}>
            {props.message}
            <div className={style.like}>
                <span>{props.like} like</span>
            </div>
        </div>
    )
}

export default Post;