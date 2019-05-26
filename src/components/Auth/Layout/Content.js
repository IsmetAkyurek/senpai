import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import auth from 'plugins/routes/auth';

class Content extends Component {
  render() {
    return (
      <div className="auth-card">
        <Switch>
          {auth.routes.map(x => (
            <Route key={x.name} path={`${auth.path}${x.path}`} component={x.component} />
          ))}
          <Redirect from="/auth" to="/auth/sign-in" />
        </Switch>
      </div>
    );
  };
};

export default Content;