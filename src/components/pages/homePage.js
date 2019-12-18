import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllGames } from '../../Redux/actions/dataActions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GameTemplate from '../gameTemplates/gametemp';
import Game from '../gameTemplates/Game';


class Homepage extends Component {
  componentDidMount() {
    this.props.getAllGames();
    this.setState({ games: this.props.data });
  }
  render() {
    const { games } = this.props.data;
    let currentGames = games.map((game) =>  { return <Col md={4}><Game key={game.gameId} game={game} /></Col> });
    return (
      <Container>
        <Row>
          { currentGames }
        </Row>
      </Container>
    );
  }
}

Homepage.propTypes = {
  getAllGames: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect( mapStateToProps, { getAllGames } )(Homepage);
