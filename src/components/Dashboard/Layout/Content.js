import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import dashboard from 'plugins/routes/dashboard';

class Content extends Component {
  render() {
    return (
      <div className="sp-content">
        <Switch>
          {dashboard.routes.map(x => (
            <Route
              key={x.name}
              path={`${dashboard.path}${x.path}`}
              render={(props) => <x.component {...props} />}
            />
          ))}
          <Redirect from="/dashboard" to="/dashboard/home" />
        </Switch>
      </div>
    );
  };
};

export default Content;