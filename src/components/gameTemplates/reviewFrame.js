import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
//react bootstrap
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
//get one game
import { getAllReviews } from '../../Redux/actions/dataActions';
import PostReviewFrame from './postReviewFrame';

class ReviewFrame extends Component {
  componentDidMount() {
    this.props.getAllReviews(this.props.data.game.gameId);
  }

  render() {
    const { reviews } = this.props.data;
    console.log(reviews);
    let currentReview = reviews.map((review) =>
   
      <Card className="user-projects container back" key={34 + Math.random() * 1000000 - 76}>
        <Card.Title>{review.title}</Card.Title>
        <Card.Body>
          <p>
            {' '}
            {review.body}
            {' '}
          </p>
          <cite title="Source Title">{review.handle}</cite>
        </Card.Body>
      </Card>
     
    );

    return (
      <div className="review-frame" key={34 + Math.random() * 1000000 - 76}>
        {currentReview}
        <Row>
          <PostReviewFrame key={this.props.passGame} />
        </Row>
      </div>
    );
  }
}

ReviewFrame.propTypes = {
  getAllReviews: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(mapStateToProps, { getAllReviews })(ReviewFrame);
