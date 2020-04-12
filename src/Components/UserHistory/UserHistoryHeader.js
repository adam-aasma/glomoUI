import React from 'react';
import {Link} from 'react-router-dom';
import HistoryStyles from './History.module.css';


const UserHistoryHeader = () => {
    return (
        <header className={HistoryStyles.header}>
            <p className={HistoryStyles.status}>Detta är din tips rad...</p>
            <Link className={HistoryStyles.link} to="/">Spela-></Link>
        </header>
    )
}

export default UserHistoryHeader;