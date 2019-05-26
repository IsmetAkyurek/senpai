import React, { Component } from 'react';
import { Button, Input } from 'components/UIComponents';

class SignIn extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('token', '123');
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div className="sign-in">
        <h1>Sign In</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-item">
            <Input label="Username" />
          </div>
          <div className="form-item">
            <Input label="Password" type="password" />
          </div>
          <Button className="full-width mt-10" type="primary">
            Sign In
          </Button>
        </form>
      </div>
    );
  };
};

export default SignIn;