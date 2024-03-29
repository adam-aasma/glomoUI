import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AuthContextProvider from './Context/Auth-context';
import HttpContextProvider from './Context/Http-context'



ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router>
        <HttpContextProvider>
          <App />
        </HttpContextProvider>
      </Router>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
