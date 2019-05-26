import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Content from './Content';
import { Loading } from 'components/UIComponents';

class AuthLayout extends Component {
  state = { loading: true };

  componentDidMount() {
    let token = localStorage.getItem('token');
    token ? window.location.pathname = '/dashboard' : this.setState({ loading: false });
  };

  render() {
    const { loading } = this.state;
    const { history } = this.props;

    return (
      loading ?
        <Loading />
        :
        <div className="auth-layout">
          <Content history={history} />
        </div>
    );
  };
};

export default withRouter(AuthLayout);