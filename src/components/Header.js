import React from 'react';
import '../components/components.css';

function Header(props) {

    return (
        <header>
            <section className='large-display'><div className='title'><h1>ClickyPiccy</h1><br /><span className='title-tagline'>Can you click all twelve album covers without clicking any one twice?</span></div><div className='scores'>High Score by {props.highScorer}:<section className='number-display'>{props.overallHighScore}</section><br />Score this game: <section className='number-display'>{props.thisGameScore}</section></div></section>


            <section className='small-display'><div className='title'><h1>ClickyPiccy</h1><br /><span className='title-tagline'>Can you click all twelve album covers without clicking any one twice?</span></div>
                <div className='scores'>High Score by {props.highScorer}:<section className='number-display'>{props.overallHighScore}</section><br />Score this game: <section className='number-display'>{props.thisGameScore}</section></div></section>
        </header>
    )
};

export default Header;
