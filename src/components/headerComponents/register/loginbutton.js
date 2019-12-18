import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Login from './login';

class LoginButton extends Component {

    constructor(props) {
      super(props);
      this.state = { addModalShowLogin: false}
    }

  render() {
    let addModalCloseLogin  =() => this.setState({addModalShowLogin: false});
    return (
      <li>
        <ButtonToolbar>

          <Button
            variant = 'primary'
            onClick={()=> this.setState({ addModalShowLogin: true})}>
            Login
          </Button>

          <Login
            show={this.state.addModalShowLogin}
            onHide={addModalCloseLogin}
          />

        </ButtonToolbar>
      </li>
  )}
}
export default LoginButton;
