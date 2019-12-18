import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllGames } from '../../Redux/actions/dataActions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GameTemplate from '../gameTemplates/gametemp';
import Game from '../gameTemplates/Game';


class GameGenreTemp extends Component {
  state = { genreType: null };
  componentDidMount() {
    let genre = this.props.match.params.gameGenre;
    if(genre) {
      this.setState({ genreType: genre });
    }
    this.props.getAllGames();
  }
  render() {
    const { games } = this.props.data;
    var result;
    const MOBA = (games.map((game) => { if (game.genre == 'MOBA'){ return <Col md={4}><Game key={game.gameId} game={game} /></Col> }}));
    const RPG = (games.map((game) => { if (game.genre == 'RPG'){ return <Col md={4}><Game key={game.gameId} game={game} /></Col> }}));
    const thirdPersonShooter = (games.map((game) => { if (game.genre == 'thirdpersonshooter'){ return <Col md={4}><Game key={game.gameId} game={game} /></Col> }}));
    const openWorld = (games.map((game) => { if (game.genre == 'openworld'){ return <Col md={4}><Game key={game.gameId} game={game} /></Col> }}));

    if(this.state.genreType === 'MOBA') result = MOBA;
    if(this.state.genreType === 'RPG') result = RPG;
    if(this.state.genreType === 'thirdPersonShooter') result = thirdPersonShooter;
    if(this.state.genreType === 'openWorld') result = openWorld;

    return (
      <Container>
        <Row>
          { result }
        </Row>
      </Container>
    );
  }
}

GameGenreTemp.propTypes = {
  getAllGames: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect( mapStateToProps, { getAllGames } )(GameGenreTemp);
