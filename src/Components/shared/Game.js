import React, {Fragment} from 'react';
import GameStyles from './Game.module.css';
function Game(props) {
    return(
        <Fragment>
            <header className={GameStyles.header}>
                <div className={GameStyles.countryGroupWrapper}>
                    <h2 className={GameStyles.country}>{props.game.country}</h2>
                    <h3 className={GameStyles.group}>{props.game.group}</h3>
                </div>
                <span className={GameStyles.sport}>{props.game.sport}</span>
            </header>
            <div className={GameStyles.game}>
                <h4 className={GameStyles.teamHome} >{props.game.homeName}</h4>
                <span className={GameStyles.VS}> vs </span>
                <h4 className={GameStyles.teamAway}>{props.game.awayName}</h4>
            </div>
        </Fragment>
    );
}

export default Game;