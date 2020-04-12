import React,{useContext,useState, useEffect,Fragment} from 'react';
import Game from '../shared/Game';
import BetButtons from '../shared/BetButtons';
import HistoryStyles from './History.module.css';
import {AuthContext} from '../../Context/Auth-context';
import {HttpContext} from '../../Context/Http-context';
import UserHistoryHeader from './UserHistoryHeader';

const UserHistory = () => {
    const {userId} = useContext(AuthContext);
    const {getUserHistory} = useContext(HttpContext);

    const [bettedGames, setBettedGames] = useState([]);
   
    useEffect( () => {
        let  mounted = true;
        getUserHistory(userId).then(userGames => {
            if(mounted) {
                setBettedGames(userGames);
            }
        });
        return () => mounted = false;
    }, [setBettedGames,getUserHistory,userId]);

    return(
        <Fragment>
            <UserHistoryHeader/>
            <ul className={HistoryStyles.ul}>
                {bettedGames.map(g => {
                    return <li className={HistoryStyles.li} key={g.gameId}>
                        <Game {...g}></Game>
                        <BetButtons active={false} betted={g.betted}/>
                    </li>
                })}
            </ul> 
        </Fragment>
    )
}

export default UserHistory;