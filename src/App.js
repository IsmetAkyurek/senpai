import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import routes from 'plugins/routes';

class App extends Component {
  render() {
    return (
      <Switch>
        {routes.map(x => (
          <Route path={x.path} component={x.component} key={x.name} />
        ))}
        <Redirect from="/" to="/auth" />
      </Switch>
    );
  };
};

export default withRouter(App);
