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
      .btn-MOBA {
        background-color: blue;
        color: white;
      }
      .btn-RPG {
        background-color: green;
        color: white;
      }
      .btn-OW {
        background-color: red;
        color: white;
      }
      .btn-TPS {
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



    <Container>
      <Row>
        <Col sm={{ span: 10 }}>
          <Link to='/GameGenres/MOBA'>MOBA</Link>
        </Col>
        <Col>
        <Link to='/GameGenres/RPG'>RPG</Link>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 10 }}>
        <Link to='/GameGenres/thirdPersonShooter'>Third Person Shooter</Link>
        </Col>
        <Col>
        <Link to='/GameGenres/openWorld'>Open World</Link>
        </Col>
      </Row>
    </Container>

  </div>
    );
  }
}


/*


<Button variant="MOBA" size="xxl">MOBA</Button>
<Button variant="RPG" size="xxl">RPG</Button>
<Button variant="OW" size="xxl">Open World</Button>
<Button variant="TPS" size="xxl">Third Person Shooter</Button>






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


*/



GameGenres.propTypes = {
  getAllGames: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect( mapStateToProps, { getAllGames } )(GameGenres);
