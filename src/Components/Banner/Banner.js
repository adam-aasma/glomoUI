import React from 'react';
import Styles from './Banner.module.css';

export default function Banner() {
    return(
        <header className={Styles.header}>
            <h1 className={Styles.logo}>Betting Hörnan</h1>
        </header>
    )
}