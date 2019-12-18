import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
//react bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const GameTemplate = (props) => {
  const { current } = props;
  const gameTemp = Array.from({ length: 1 }).map((item, index) => (
    <Card style={{ width: '300px' , height: '300px'}} className = {current.gameId} key={index}>
      <Card.Img variant="top" src={current.image} />
      <Card.Body>
        <Card.Title>{current.title}</Card.Title>
        <Button variant="primary">View Game</Button>
      </Card.Body>
   </Card>
  ));
  return <Fragment>{ gameTemp }</Fragment>;
};

GameTemplate.propTypes = {
  current: PropTypes.object.isRequired
};

export default (GameTemplate);
