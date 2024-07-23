import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FullPage from './FullPage';

import reportWebVitals from './reportWebVitals';

/*
To Do - 
  TopBar - 
    Fix reload bug with active item
  Banner -
    Write About Me Section
    Setup Extra Info Section
    Figure out banner design
  Portfolio - 
    Add Projects
    Add Skills
    Setup Experience Section
    Add More Games
      Game Ideas - 
        Chess
        BlackJack
        Connect 4 -- DONE
        Roulette
        Snake
        Pong
        RPS
*/
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FullPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
