import React, { Component } from 'react';
import {Modal, Button, Row, Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';



//Redux
import { connect } from 'react-redux';
import { loginUser } from '../../../Redux/actions/userActions';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
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

    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(userData, this.props.history);
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
      id="loginModal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
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
                  <Button
                  variant="primary"
                  type="submit"
                  >Login</Button>
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
}
export default connect(mapStateToProps,mapActionsToProps)(Login);
