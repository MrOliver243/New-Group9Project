import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
//react bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
//get one game
import { getGame } from '../../Redux/actions/dataActions';
import ReviewFrame from './reviewFrame';
import ElementDisplay from "./ElementDisplay";

class GameFrame extends Component {
  state = { gameIdCurrent: null };
  componentDidMount() {
    let gameId = this.props.match.params.gameId;
    localStorage.setItem('gameId', gameId);

    if (gameId) {
      this.setState({ gameIdCurrent: gameId });
    }
    this.props.getGame(gameId);
  }


  render() {
    const { game } = this.props.data;
    const { gameIdCurrent } = this.state;

    return (
      <div>



        <ElementDisplay
          // key={p.toString()}
          // var indexNo={passUser[p].i}
          gameTitle={game.title}
          gameDes={game.description}
          gameRats={game.rating}
          gameWiki={game.wikiPage}
          gameWpedia={game.wikipediaPage}
          gameImage={game.image}
          gameOffic = {game.officialWebsite}
          pClick={null}

        />
        <ReviewFrame passGame={game.gameId} key={game.gameId + "-0okp[,]"} />
      </div>

    );
  }
}

GameFrame.propTypes = {
  getGame: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data,
  gameIdCurrent: state.gameIdCurrent
});

export default connect(mapStateToProps, { getGame })(GameFrame);
