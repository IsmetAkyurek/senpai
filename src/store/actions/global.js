
import { DashboardProxy } from 'proxies';
import { removeEmptyData } from 'helpers';

export default {
  getDatas: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      dispatch({ type: 'GLOBAL_REQUEST', payload });
      new DashboardProxy(removeEmptyData(payload.filter)).getData(payload).then(response => {
        dispatch({ type: 'GLOBAL_SUCCESS', payload: { key: payload.key, data: response.data } });
        resolve(response);
      }).catch(error => {
        dispatch({ type: 'GLOBAL_ERROR', payload: { key: payload.key, error: error.message } });
        reject();
      });
    });
  },
  getData: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new DashboardProxy().getData(payload).then(response => {
        resolve(response);
      }).catch(error => {
        reject();
      });
    });
  },
  addData: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new DashboardProxy().addData(payload).then(response => {
        resolve();
      }).catch(error => {
        reject();
      });
    });
  },
  updateData: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new DashboardProxy().updateData(payload).then(response => {
        dispatch({ type: 'UPDATE_DATA', payload: { key: payload.key, data: response } });
        resolve();
      }).catch(error => {
        reject();
      });
    });
  },
  deleteData: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new DashboardProxy().deleteData(payload).then(response => {
        dispatch({ type: 'DELETE_DATA', payload: { key: payload.key, data: payload } });
        resolve();
      }).catch(error => {
        reject();
      });
    });
  },
  getLookups: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      if (payload.url !== 'Tenants/MobileTenantsLookup') payload.url += '/Lookup';
      new DashboardProxy(payload.filter).getData(payload).then(response => {
        dispatch({ type: 'SET_STATE_DATA', payload: { key: payload.key, data: response } });
        resolve();
      }).catch(error => {
        reject();
      });
    });
  },
  updateFilter: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      dispatch({ type: 'SET_STATE_DATA', payload });
      resolve();
    });
  },
};