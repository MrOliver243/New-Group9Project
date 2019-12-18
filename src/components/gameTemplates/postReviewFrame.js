import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { postReview, clearErrors } from '../../Redux/actions/dataActions';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


class PostReview extends Component {
  state = {
    handle:'',
    body: '',
    errors: {},
    currentTitle: null,
    reviewId:'',
    rating:'',
    gameId: null
  };
  /*
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
    if (!nextProps.UI.errors) {
      this.setState({ body: '', errors: {} });
    }
  }*/

  handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }); };

  handleSubmit = (event) => {
    event.preventDefault();

    const newReview = {
      body: this.state.body,
      handle: this.state.handle,
      gameId: this.props.data.game.gameId
    };
    this.props.postReview(newReview);
  }
  render() {
    //const { currentTitle } = this.props.data.game.title;
    const { errors , user, authenticated }  = this.props;
    
    const reviewForm = authenticated ? (
      
      <div className= "container front make-top">

      <Form onSubmit={ this.handleSubmit }>
  <Form.Group>
    <Form.Label>Review Title</Form.Label>
    <Form.Control type="username" placeholder="Enter username" name="handle" value={this.state.handle} onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Enter rating</Form.Label>
    <Form.Control as="select" name="rating" value={this.state.rating} onChange={this.handleChange}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="reviewArea">
  <Form.Label>Review game now</Form.Label>
  <Form.Control as="textarea" rows="5" name="body" value={this.state.body} onChange={this.handleChange}/>
  <Form.Text style={{color:'red'}} className="text-muted">{ errors }</Form.Text>
</Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
 

      </div>
    
    
    ) : null;
    
    return reviewForm;
  }
}

PostReview.propTypes = {
  postReview: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data,
   authenticated: state.user.authenticated


});

export default connect(mapStateToProps, { postReview })(PostReview);
