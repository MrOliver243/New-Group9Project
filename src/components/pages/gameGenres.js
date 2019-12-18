import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllGames, getAllReviews } from '../../Redux/actions/dataActions';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class GameGenres extends Component {
  /*componentDidMount() {
    //this.props.getAllGames();
  }*/
  render() {
    /*
    const { games } = this.props.data;
    const MOBA = (games.map((game) => { if (game.genre == 'MOBA'){ return <div key = { game.gameId }> <h3>{ game.title }</h3><img src = { game.image } width="100" height="100"></img><p>{ game.description }</p></div> }}));
    const RPG = (games.map((game) => { if (game.genre == 'RPG'){ return <div key = { game.gameId }> <h3>{ game.title }</h3><img src = { game.image } width="100" height="100"></img><p>{ game.description }</p></div> }}));
    const thirdPersonShooter = (games.map((game) => { if (game.genre == 'thirdpersonshooter'){ return <div key = { game.gameId }> <h3>{ game.title }</h3><img src = { game.image } width="100" height="100"></img><p>{ game.description }</p></div> }}));
    const openWorld = (games.map((game) => { if (game.genre == 'openworld'){ return <div key = { game.gameId }> <h3>{ game.title }</h3><img src = { game.image } width="100" height="100"></img><p>{ game.description }</p></div> }}));
*/
    return (
      <div className='container-fluid'>
      <style type="text/css">
      {`
      #MOBA {
        background-color: blue;
        color: white;
        width:400px;
        height:200px;
      }
      #overall {
        position: center;
        padding-left: 45%;
        padding-top:20px;
        padding-bottom:50px;
      }
      #RPG {
        background-color: green;
        color: white;
        width: 400px;
        height: 200px;
      }
      #rrrr {
        padding-top: 10px;
      }
      #rrrrrrrr {
        padding-top: 50px;
        padding-bottom: 50px;
      }
      #spacer {
        padding-top: 50px;
      }
      #thirdPersonShooter {
        background-color: purple;
        color: white;

      }
      .btn-xxl {
        width: 50%;
        height: 100%;
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
      }
      `}
    </style>

<div id="overall">
    <Container>

      <Row id="spacer">
        <Col sm={{ span: 10 }}>
            <Link to='/GameGenres/MOBA'>MOBA</Link>
        </Col>
        </Row>

        <Row id="spacer">
        <Col>
        <Link to='/GameGenres/RPG'>RPG</Link>
        </Col>
      </Row>
      <Row id="spacer">
        <Col sm={{ span: 10 }}>
        <Link to='/GameGenres/thirdPersonShooter'>Third Person Shooter</Link>
        </Col>
      </Row>
      <Row id="spacer">
      <Col>
      <Link to='/GameGenres/openWorld'>Open World</Link>
      </Col>
      </Row>
    </Container>
    </div>
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
