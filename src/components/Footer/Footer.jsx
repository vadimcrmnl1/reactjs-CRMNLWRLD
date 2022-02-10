import React from 'react';
import ft from './Footer.module.css';
import vk from './vk.png';
import yt from './yt.png';
import inst from './inst.png';
import fb from './fb.png';
import tw from './tw.png';


const Footer = () => {
    return <article className={ft.item}>
        <div className={ft.item_tx}>
            All rights reserved. 2022
        </div>
        <a href="https://vk.com/criminal_jc"><img className={ft.logos} src={vk} alt={"vk.com"}/></a>
        <a href="https://www.youtube.com/channel/UCo0g8nKqC-Zw_0hIMvGZm3w"><img className={ft.logos} src={yt} alt={"youtube.com"}/></a>
        <a href="https://www.instagram.com/vadim.crmnl/"><img className={ft.logos} src={inst} alt={"instagram.com"}/></a>
        <a href="https://www.facebook.com/vadim.karpenko.5"><img className={ft.logos} src={fb} alt={"fb.com"}/></a>
        <a href="https://twitter.com/vadim_crmnl"><img className={ft.logos} src={tw} alt={"twitter.com"}/></a>

    </article>

}


export default Footer;