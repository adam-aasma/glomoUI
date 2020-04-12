import React,{useState,useEffect,useContext,Fragment} from 'react';
import Game from '../shared/Game';
import HomeFooter from './HomeFooter';
import { AuthContext } from '../../Context/Auth-context';
import { HttpContext } from '../../Context/Http-context';
import GameStyles from '../shared/Game.module.css';
import BetButtons from '../shared/BetButtons';


const Home = () => {
    const {userId} = useContext(AuthContext);
    const {getGames,placeBet} = useContext(HttpContext);

    const [allGames, setAllGames] = useState([]);
    const [refusedGames, setRefusedGames] =useState([]);
    const [currentGame,setCurrentGame] = useState();
    

    const handleBet = async bet => {
        placeBet({userId,bet,gameId: currentGame.gameId}).then( () => {
            removeGameFromAllGames(currentGame.gameId);
        });
    }

    function removeGameFromAllGames(gameId) {
        setAllGames( previousState => previousState.filter(g => g.gameId !== gameId));
    }

    const getRandomeGame = () => allGames[Math.floor(Math.random()*allGames.length)];
       
     
    const nextGame = () => {
        const game = currentGame;
        removeGameFromAllGames(game.gameId);
        setRefusedGames(prevState => [...prevState,game]);
    }
    useEffect( () => {
        let  mounted = true;
        getGames(userId).then(games => {
            if(mounted) {
                setAllGames(games);
               
            }
        });
        return () => mounted = false;
    }, [setAllGames,getGames,userId]);
    useEffect( () => {
        setCurrentGame(getRandomeGame());
    },[allGames])
    return (
        <Fragment>
           {currentGame && 
                <div className={GameStyles.centContainer}>
                    <Game {...currentGame} handleBet={handleBet} nextGame={nextGame}/>
                    <BetButtons handleBet={handleBet} active={true}/>
                    <HomeFooter nextGame={nextGame}/>
                </div>}
        </Fragment>
    );
  }
  
  export default Home;