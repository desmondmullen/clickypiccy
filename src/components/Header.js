import React from 'react';
import '../components/components.css';

function Header(props) {

    return (
        <header className="App-header">
            <div className='title'><h1>ClickyPiccy</h1><br />Can you click all twelve album covers without clicking any one twice?</div><div className='scores'>High Score by {props.highScorer}:<section className='number-display'>{props.overallHighScore}</section><br />Score this game: <section className='number-display'>{props.thisGameScore}</section></div>
        </header>
    )
};

export default Header;
