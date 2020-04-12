import React, {useContext} from 'react';
import {Switch,Route, useHistory} from "react-router-dom";
import Register from './Register';
import {HttpContext} from '../../Context/Http-context';
import { AuthContext } from '../../Context/Auth-context';


function Index() {
    const { register, login} = useContext(HttpContext);
    const {initUserSession} = useContext(AuthContext);
    const history = useHistory();
    const handleLogin = async credentials => {
        login(credentials).then( resp => {
            initUserSession({userId: resp.id, token: resp.access_token});
            history.replace("");
        });
    }
    const handleRegister = async user => {
        register(user).then(resp => {
            initUserSession({userId: resp.id, token: resp.access_token});
            history.replace("");
        });
    }
    return (
        <Switch>
            <Route exact path="/login">
                <Register linkText='Har inte konto' link="Registrera mig" linkTo="/register" title="Login" handleSubmit={handleLogin}/>
            </Route>
            <Route exact path="/register">
                <Register linkText='Har redan konto' link='Logga in' linkTo='/login' title='Registrera' handleSubmit={handleRegister}/>
            </Route>
        </Switch>
    )
}

export default Index;