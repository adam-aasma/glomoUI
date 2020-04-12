import React from 'react';
import {Link} from 'react-router-dom';
import FooterStyles from './HomeFooter.module.css';

const HomeFooter = props => {
    return (
        <footer className={FooterStyles.footer}>
            <Link to="/history" className={FooterStyles.link}>Spelade</Link>
            <button className={FooterStyles.footerNext} onClick={() => props.nextGame()}>Next</button>
        </footer>
    )
}

export default HomeFooter;