import Proxy from './Proxy';
import config from 'config';

export default class DashboardProxy extends Proxy {
  constructor(parameters) {
    super(config.dashboardApiUrl, parameters);
  };
};
