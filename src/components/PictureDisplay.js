import React, {Component} from 'react';
import Header from './Header';
import Modal from 'react-responsive-modal';
import '../components/components.css';

class PictureDisplay extends Component {
  state = {
    thisGameScore: 0,
    lastGameScore: 0,
    overallHighScore: 0,
    highScorer: 'anonymous',
    newHighScore: false,
    idsArray: [
      'pic01',
      'pic02',
      'pic03',
      'pic04',
      'pic05',
      'pic06',
      'pic07',
      'pic08',
      'pic09',
      'pic10',
      'pic11',
      'pic12',
    ],
    srcArray: [
      'https://desmondmullen.com/clickypiccy/assets/images/01.png',
      'https://desmondmullen.com/clickypiccy/assets/images/02.png',
      'https://desmondmullen.com/clickypiccy/assets/images/03.png',
      'https://desmondmullen.com/clickypiccy/assets/images/04.png',
      'https://desmondmullen.com/clickypiccy/assets/images/05.png',
      'https://desmondmullen.com/clickypiccy/assets/images/06.png',
      'https://desmondmullen.com/clickypiccy/assets/images/07.png',
      'https://desmondmullen.com/clickypiccy/assets/images/08.png',
      'https://desmondmullen.com/clickypiccy/assets/images/09.png',
      'https://desmondmullen.com/clickypiccy/assets/images/10.png',
      'https://desmondmullen.com/clickypiccy/assets/images/11.png',
      'https://desmondmullen.com/clickypiccy/assets/images/12.png',
    ],
    theClicked: [],
    openModal1: false,
    openModal2: false,
    modalMessage: 'Game over!',
  };

  componentDidMount() {
    this.shuffle();
  }

  handleClick = (event) => {
    let currentClick = event.target.id.substr(3, 2);
    if (this.state.theClicked.includes(currentClick)) {
      if (this.state.thisGameScore > this.state.overallHighScore) {
        this.setState({overallHighScore: this.state.thisGameScore});
        this.setState({newHighScore: true});
      }
      this.resetGame();
    } else {
      if (this.state.thisGameScore === 11) {
        // with this answer, it's 12
        this.resetGame();
      } else {
        this.state.theClicked.push(currentClick);
        this.shuffle();
      }
      this.setState({thisGameScore: this.state.thisGameScore + 1});
      setTimeout(() => {
        if (this.state.thisGameScore > this.state.overallHighScore) {
          this.setState({overallHighScore: this.state.thisGameScore});
          this.setState({newHighScore: true});
        }
      }, 50);
    }
    console.log(currentClick);
  };

  shuffle = () => {
    const theIds = this.state.idsArray;
    const theSrcs = this.state.srcArray;
    for (let i = theIds.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [theIds[i], theIds[j]] = [theIds[j], theIds[i]];
      [theSrcs[i], theSrcs[j]] = [theSrcs[j], theSrcs[i]];
    }
    this.setState({idsArray: theIds});
    this.setState({srcArray: theSrcs});
  };

  resetGame = () => {
    setTimeout(() => {
      this.setState({lastGameScore: this.state.thisGameScore});
      if (this.state.newHighScore === false && this.state.thisGameScore < 12) {
        // this.setState({ modalMessage: 'Game Over. Try again!' });
        this.setState({openModal1: true});
      } else {
        if (this.state.thisGameScore === 12) {
          // 12 is always a 'new' high score
          this.setState({modalMessage: 'You Won! And you have earned the highest score!'});
        } else {
          if (this.state.newHighScore === true) {
            this.setState({
              modalMessage: `You didn't win this round. But you earned the highest score!`,
            });
          }
        }
        this.setState({openModal2: true});
      }
      this.setState({thisGameScore: 0});
      this.setState({theClicked: []});
      this.setState({newHighScore: false});
      this.shuffle();
    }, 100);
  };

  handleChange = (event) => {
    this.setState({highScorer: event.target.value});
  };

  handleSubmit = (event) => {
    if (this.state.highScorer.trim() === '') {
      this.setState({highScorer: 'anonymous'});
    }
    event.preventDefault();
    this.onCloseModal();
  };

  onCloseModal = () => {
    this.setState({openModal1: false});
    this.setState({openModal2: false});
  };

  render() {
    return (
      <>
        <Header
          thisGameScore={this.state.thisGameScore}
          overallHighScore={this.state.overallHighScore}
          highScorer={this.state.highScorer}
        />
        <br />
        <Modal open={this.state.openModal1} onClose={this.onCloseModal} focusTrapped>
          <h1>Game Over. You got {this.state.lastGameScore} out of 12. Try again!</h1>
        </Modal>
        <Modal open={this.state.openModal2} onClose={this.onCloseModal} focusTrapped>
          <h1>{this.state.modalMessage}</h1>
          <h3>Your score was {this.state.lastGameScore} out of 12.</h3>
          <form onSubmit={this.handleSubmit}>
            <h2>
              Enter your name for posterity:
              <br />
              <input
                type="text"
                className="high-scorer-input"
                value={this.state.highScorer}
                onChange={this.handleChange}
              />{' '}
              <button type="submit" value="Submit" className="high-scorer-input">
                OK
              </button>
            </h2>
          </form>
        </Modal>
        <div className="tile-display wrapper">
          <img
            id={this.state.idsArray[0]}
            alt=""
            className="tile zoom"
            src={this.state.srcArray[0]}
            onClick={this.handleClick}
          />
          <img
            id={this.state.idsArray[1]}
            alt=""
            className="tile zoom"
            src={this.state.srcArray[1]}
            onClick={this.handleClick}
          />
          <img
            id={this.state.idsArray[2]}
            alt=""
            className="tile zoom"
            src={this.state.srcArray[2]}
            onClick={this.handleClick}
          />
          <img
            id={this.state.idsArray[3]}
            alt=""
            className="tile zoom"
            src={this.state.srcArray[3]}
            onClick={this.handleClick}
          />
          <img
            id={this.state.idsArray[4]}
            alt=""
            className="tile zoom"
            src={this.state.srcArray[4]}
            onClick={this.handleClick}
          />
          <img
            id={this.state.idsArray[5]}
            alt=""
            className="tile zoom"
            src={this.state.srcArray[5]}
            onClick={this.handleClick}
          />
          <img
            id={this.state.idsArray[6]}
            alt=""
            className="tile zoom"
            src={this.state.srcArray[6]}
            onClick={this.handleClick}
          />
          <img
            id={this.state.idsArray[7]}
            alt=""
            className="tile zoom"
            src={this.state.srcArray[7]}
            onClick={this.handleClick}
          />
          <img
            id={this.state.idsArray[8]}
            alt=""
            className="tile zoom"
            src={this.state.srcArray[8]}
            onClick={this.handleClick}
          />
          <img
            id={this.state.idsArray[9]}
            alt=""
            className="tile zoom"
            src={this.state.srcArray[9]}
            onClick={this.handleClick}
          />
          <img
            id={this.state.idsArray[10]}
            alt=""
            className="tile zoom"
            src={this.state.srcArray[10]}
            onClick={this.handleClick}
          />
          <img
            id={this.state.idsArray[11]}
            alt=""
            className="tile zoom"
            src={this.state.srcArray[11]}
            onClick={this.handleClick}
          />
        </div>
      </>
    );
  }
}

export default PictureDisplay;
