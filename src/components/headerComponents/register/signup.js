import React, { Component } from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import PropTypes from 'prop-types';



//Redux
import { connect } from 'react-redux';
import { signupUser } from '../../../Redux/actions/userActions';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      handle: '',
      errors:{}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.UI.errors){
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle
    }


    this.props.signupUser(newUserData, this.props.history);
/*

    axios.post('https://europe-west1-react-game-website.cloudfunctions.net/api/signup', newUserData)
    .then(response => {
      alert("success");
      //this.props.history.push('../../pages/games');
    })
    .catch(e => {
      this.setState({
        errors: e.response.data
      })
    })

    */
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { errors } = this.props;
    return (
      <Modal
      {...this.props}
      size="sm"
      id="registerModal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Signup
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div className="container">

          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit}>

                <Form.Group>
                    <Form.Control
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="Enter Email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <Form.Text style={{color:'red'}} className="text-muted"> {this.state.errors.email}</Form.Text>

                </Form.Group>

                <Form.Group>
                    <Form.Control
                      id="password"
                      type="password"
                      name="password"
                      required
                      placeholder="Enter Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      required
                      placeholder="Please Confirm Password"
                      value={this.state.confirmPassword}
                      onChange={this.handleChange}
                    />
                    <Form.Text style={{color:'red'}} className="text-muted"> {this.state.errors.confirmPassword}</Form.Text>

                </Form.Group>

                <Form.Group>
                    <Form.Control
                      id="handle"
                      type="text"
                      name="handle"
                      required
                      placeholder="Enter Username"
                      value={this.state.handle}
                      onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group>
                  <Button variant="primary" type="submit">Submit</Button>
                </Form.Group>

                <Form.Text style={{color:'red'}} className="text-muted"> {this.state.errors.general}</Form.Text>

              </Form>
            </Col>
          </Row>

        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
  }
}


Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  signupUser
}

export default connect(mapStateToProps, mapActionsToProps)(Signup);
