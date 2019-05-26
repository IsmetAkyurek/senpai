import axios from 'axios';

export default class Proxy {
  constructor(endpoint = '', parameters = {}) {
    this.endpoint = endpoint;
    this.parameters = parameters;
  };

  getParameterString = (obj, prefix) => {
    let str = [], p;
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        let k = prefix ? `${prefix}[${p}]` : p, v = obj[p];
        str.push((v !== null && typeof v === 'object') ? this.getParameterString(v, k) : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
      }
    }
    return str.join('&');
  };

  submit = (requestType, url, data = null) => {
    return new Promise((resolve, reject) => {
      let str = this.getParameterString(this.parameters);
      axios[requestType](`${this.endpoint}/${url}${str !== '' ? `?${str}` : ''}`, data).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error.response.data);
      });
    });
  };

  getData = (payload) => {
    return this.submit('get', `${payload.url}${payload.id ? `/${payload.id}` : ''}`);
  };

  addData = (payload) => {
    return this.submit('post', `${payload.url}${payload.id ? `/${payload.id}` : ''}`, payload.data);
  };

  updateData = (payload) => {
    return this.submit('put', `${payload.url}${payload.id ? `/${payload.id}` : ''}`, payload.data);
  };

  deleteData = (payload) => {
    return this.submit('delete', `${payload.url}${payload.id ? `/${payload.id}` : ''}`);
  };
};