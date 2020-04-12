import React,{Fragment} from 'react';
import GameStyles from './Game.module.css';

const BetButtons = props => {
    const HOME_WIN = '1';
    const DRAW = 'x';
    const AWAY_WIN = '2';
    const placeBet = bet => {
        props.handleBet(bet);
    }

    const getStyle = betted => {
        let className = GameStyles.betButton;
        if(props.betted !== betted) {
            className += ' ' + GameStyles.betButtonInactive;
        }
        return className;
    }
    return (
        <div className={GameStyles.betButtons}>
            {props.active ?
                <Fragment>
                    <button className={GameStyles.betButton} onClick={() => placeBet(HOME_WIN)}>{HOME_WIN}</button>
                    <button className={GameStyles.betButton} onClick={() => placeBet(DRAW)}>{DRAW}</button>
                    <button className={GameStyles.betButton} onClick={() => placeBet(AWAY_WIN)}>{AWAY_WIN}</button>
                </Fragment>
            : 
                <Fragment>
                    <button disabled className={getStyle(HOME_WIN)} >{HOME_WIN}</button>
                    <button disabled className={getStyle(DRAW)}>{DRAW}</button>
                    <button disabled className={getStyle(AWAY_WIN)}>{AWAY_WIN}</button>
                </Fragment>
        }
        </div>
        
    )
}

export default BetButtons;