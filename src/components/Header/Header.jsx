import React from 'react';
import logo1 from './logo211.png';
import nb from './Header.module.css';

const Header = () => {
    return (
        <header className={nb.header}>
            <a href="https://vk.com/criminal_jc"><img src={logo1} alt={"Logo"}/></a>
            <p className={nb.header_tx}>
                your favorite social network
            </p>

        </header>
    )
}


export default Header;