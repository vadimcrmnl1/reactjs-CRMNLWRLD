import React from 'react';
import nb from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={nb.nav}>
            <div className={nb.item}>
                <a className={nb.link} href="">Profile</a>
            </div>
            <div className={nb.item}>
                <a className={nb.link} href="">Messages</a>
            </div>
            <div className={nb.item}>
                <a className={nb.link} href="">News</a>
            </div>
            <div className={nb.item}>
                <a className={nb.link} href="">Music</a>
            </div>
            <div className={nb.item}>
                <a className={nb.link} href="">Photo</a>
            </div>
            <div className={nb.item}>
                <a className={nb.link} href="">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;