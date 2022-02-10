import React from 'react';
import style from './Profile.module.css'
import ava from './ava.jpg'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={style.content}>
            <div className={style.wrapper}>
                <h2 className={style.item_des}>
                    Vadzim Karpenka
                </h2>
                <ul>
                    <li className={style.item_des}>Man</li>
                    <li className={style.item_des}>28 y.o.</li>
                    <li className={style.item_des}>Pharmacist</li>
                    <li className={style.item_des}>Co-Founder</li>
                    <li className={style.item_des}>Front-end</li>
                </ul>
            </div>
            <img className={style.item_ava} src={ava} alt={"Avatar"}/>
            <MyPosts />
        </div>
    );
}

export default Profile;