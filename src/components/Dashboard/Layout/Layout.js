import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sider, Content } from './';
import actions from 'store/actions/auth';
import { Loading } from 'components/UIComponents';

class Layout extends Component {
  state = { loading: true };

  componentDidMount() {
    this.props.getAccount().then(() => {
      this.setState({ loading: false });
    }).catch(() => {
      window.location.pathname = '/auth/sign-in';
    });
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="sp-layout">
        {loading ?
          <Loading className="fullscreen text-lightpurple" />
          :
          <>
            <Sider />
            <Content />
          </>
        }
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAccount: () => dispatch(actions.getAccount()),
});
export default connect(null, mapDispatchToProps)(Layout);