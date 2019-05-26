import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import dashboard from 'plugins/routes/dashboard';
import { Icon } from 'components/UIComponents';

class Sider extends Component {
  logout = () => {
    localStorage.removeItem('token');
    window.location.pathname = '/auth/sign-in';
  };

  render() {
    return (
      <div className="sp-sider">
        <div className="logo">
          <img src="/static/img/logo.png" alt="Senpai" />
        </div>
        <div className="sp-side-menu">
          {dashboard.routes.map(x => (
            <NavLink to={`${dashboard.path}${x.path}`} key={x.name} className="sp-side-menu-item" activeClassName="is-active">
              <Icon type={x.icon} />
            </NavLink>
          ))}
        </div>
        <div className="sp-side-menu sp-side-menu-small mt-auto text-white">
          <div className="sp-side-menu-item">
            <Icon type="search" />
          </div>
          <div className="sp-side-menu-item">
            <Icon type="settings" />
          </div>
          <div className="sp-side-menu-item bg-red" onClick={this.logout}>
            <Icon type="logout" />
          </div>
        </div>
      </div>
    );
  };
};

export default Sider;