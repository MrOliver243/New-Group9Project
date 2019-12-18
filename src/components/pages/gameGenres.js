import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllGames, getAllReviews } from '../../Redux/actions/dataActions';

class GameGenres extends Component {
  componentDidMount() {
    this.props.getAllGames();
  }
  render() {
    const { games } = this.props.data;
    const MOBA = (games.map((game) => { if (game.genre == 'MOBA'){ return <div key = { game.gameId }> <h3>{ game.title }</h3><img src = { game.image } width="100" height="100"></img><p>{ game.description }</p></div> }}));
    const RPG = (games.map((game) => { if (game.genre == 'RPG'){ return <div key = { game.gameId }> <h3>{ game.title }</h3><img src = { game.image } width="100" height="100"></img><p>{ game.description }</p></div> }}));
    const thirdPersonShooter = (games.map((game) => { if (game.genre == 'thirdpersonshooter'){ return <div key = { game.gameId }> <h3>{ game.title }</h3><img src = { game.image } width="100" height="100"></img><p>{ game.description }</p></div> }}));
    const openWorld = (games.map((game) => { if (game.genre == 'openworld'){ return <div key = { game.gameId }> <h3>{ game.title }</h3><img src = { game.image } width="100" height="100"></img><p>{ game.description }</p></div> }}));

    return (
      <div className='container-fluid'>

        <h1>Games Genres</h1>
        <h3>MOBA</h3>
        <div>{ MOBA }</div>
        <h3>RPG</h3>
        <div>{ RPG }</div>
        <h3>open world</h3>
        <div>{ openWorld }</div>
        <h3>Third Person Shooter</h3>
        <div>{ thirdPersonShooter }</div>

      </div>
    );
  }
}

GameGenres.propTypes = {
  getAllGames: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect( mapStateToProps, { getAllGames } )(GameGenres);
