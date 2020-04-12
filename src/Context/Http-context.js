import React from 'react';
import {useHistory} from 'react-router-dom';
import Config from '../Config';


export const HttpContext = React.createContext({
    http: {}
});

const HttpContextProvider = props => {
    const history = useHistory();
    const UNAUTHORIZED = 401;
    const Http = (() => {
        async function validateResponse(resp) {
            if(resp.status >= 200 && resp.status < 300) {
                return await resp.json();
            }
            if(resp.status === UNAUTHORIZED) {
                history.replace("login");
            }
            return Promise.reject();
        }

        async function post(endpoint, data) {
            const response = await fetch(Config.api + endpoint, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(data)
            });
            
            return await validateResponse(response);
        }

        async function get(endpoint) {
            const resp = await fetch(Config.api + endpoint, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            });
            return  await validateResponse(resp);
        }

        return {
            login : async credentials =>  {
                return  await post('auth/login', credentials);
            },
            register: async credentials => {
                return await post('auth/register', credentials);
            },
            getGames : async userId => {
                return await get(`games/get/${userId}`);
            },
            placeBet: async payload => {
                return await post('bets/set', payload);
            },
            getUserHistory : async userId => {
                return await get(`games/history/${userId}`);
            }
        }
    })();
    return (
        <HttpContext.Provider value={{...Http}}>
            {props.children}
        </HttpContext.Provider>
    )
}

export default HttpContextProvider;