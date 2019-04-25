import React, { Component } from "react";
import Header from "./Header";
import '../components/components.css';

class PictureDisplay extends Component {
    state = {
        thisGameScore: 0,
        overallHighScore: 0,
        highScorer: 'nobody',
        newHighScore: false,
        idsArray: ['pic01', 'pic02', 'pic03', 'pic04', 'pic05', 'pic06', 'pic07', 'pic08', 'pic09', 'pic10', 'pic11', 'pic12'],
        srcArray: ['/assets/images/01.png', '/assets/images/02.png', '/assets/images/03.png', '/assets/images/04.png', '/assets/images/05.png', '/assets/images/06.png', '/assets/images/07.png', '/assets/images/08.png', '/assets/images/09.png', '/assets/images/10.png', '/assets/images/11.png', '/assets/images/12.png'],
        theClicked: []
    };

    componentDidMount() {
        this.shuffle();
    }

    handleClick = event => {
        let currentClick = event.target.id.substr(3, 2);
        if (this.state.theClicked.includes(currentClick)) {
            if (this.state.thisGameScore > this.state.overallHighScore) {
                this.setState({ overallHighScore: this.state.thisGameScore });
                this.setState({ newHighScore: true });
            }
            alert('Game over!');
            this.resetGame();
        } else {
            if (this.state.thisGameScore === 11) { // with this answer, it's 12
                alert('You won!');
                this.resetGame();
            } else {
                this.state.theClicked.push(currentClick);
                this.shuffle();
            }
            this.setState({ thisGameScore: this.state.thisGameScore + 1 });
            setTimeout(() => {
                if (this.state.thisGameScore > this.state.overallHighScore) {
                    this.setState({ overallHighScore: this.state.thisGameScore });
                    this.setState({ newHighScore: true });
                }
            }, 50);
        }
        console.log(currentClick);
    };

    shuffle = () => {
        const theIds = this.state.idsArray
        const theSrcs = this.state.srcArray
        for (let i = theIds.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [theIds[i], theIds[j]] = [theIds[j], theIds[i]];
            [theSrcs[i], theSrcs[j]] = [theSrcs[j], theSrcs[i]];
        }
        this.setState({ idsArray: theIds });
        this.setState({ srcArray: theSrcs });
    }

    resetGame = () => {
        if (this.state.newHighScore === true) {
            this.setState({ highScorer: (prompt('You have earned the highest score! Enter your name for posterity:')).trim() || 'anonymous' });
        }
        this.setState({ thisGameScore: 0 });
        this.setState({ theClicked: [] });
        this.setState({ newHighScore: false });
        this.shuffle();
    }

    render() {
        return (
            <>
                <Header
                    thisGameScore={this.state.thisGameScore}
                    overallHighScore={this.state.overallHighScore}
                    highScorer={this.state.highScorer}
                />
                <div className='tile-display'>
                    <img id={this.state.idsArray[0]} alt='' className='tile zoom' src={this.state.srcArray[0]} onClick={this.handleClick} />
                    <img id={this.state.idsArray[1]} alt='' className='tile zoom' src={this.state.srcArray[1]} onClick={this.handleClick} />
                    <img id={this.state.idsArray[2]} alt='' className='tile zoom' src={this.state.srcArray[2]} onClick={this.handleClick} />
                    <img id={this.state.idsArray[3]} alt='' className='tile zoom' src={this.state.srcArray[3]} onClick={this.handleClick} />
                    <img id={this.state.idsArray[4]} alt='' className='tile zoom' src={this.state.srcArray[4]} onClick={this.handleClick} />
                    <img id={this.state.idsArray[5]} alt='' className='tile zoom' src={this.state.srcArray[5]} onClick={this.handleClick} />
                    <img id={this.state.idsArray[6]} alt='' className='tile zoom' src={this.state.srcArray[6]} onClick={this.handleClick} />
                    <img id={this.state.idsArray[7]} alt='' className='tile zoom' src={this.state.srcArray[7]} onClick={this.handleClick} />
                    <img id={this.state.idsArray[8]} alt='' className='tile zoom' src={this.state.srcArray[8]} onClick={this.handleClick} />
                    <img id={this.state.idsArray[9]} alt='' className='tile zoom' src={this.state.srcArray[9]} onClick={this.handleClick} />
                    <img id={this.state.idsArray[10]} alt='' className='tile zoom' src={this.state.srcArray[10]} onClick={this.handleClick} />
                    <img id={this.state.idsArray[11]} alt='' className='tile zoom' src={this.state.srcArray[11]} onClick={this.handleClick} />
                </div>
            </>
        );
    }
}

export default PictureDisplay;
