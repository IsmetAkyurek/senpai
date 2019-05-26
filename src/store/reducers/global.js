import _ from 'lodash';
import state from 'store/state/global';

const initialState = state;

export default (state = initialState, action) => {
  const { key, data, error } = action.payload ? action.payload : {};
  let obj = state[key];
  switch (action.type) {
    case 'GLOBAL_REQUEST':
      _.set(state, key, { ...obj, loading: true, error: null, });
      return { ...state };
    case 'GLOBAL_SUCCESS':
      _.set(state, key, { ...obj, loading: false, data, error: null });
      return { ...state };
    case 'GLOBAL_ERROR':
      _.set(state, key, { ...obj, loading: false, data: null, error: error });
      return { ...state };
    case 'SET_STATE_DATA':
      _.set(state, key, action.payload.data);
      return { ...state };
    case 'UPDATE_DATA':
      if (key) state[key] = { ...obj, data: obj.data.map(x => data.id === x.id ? data : x) };
      return { ...state };
    case 'DELETE_DATA':
      state[key] = { ...obj, data: obj.data.filter(x => data.id !== x.id) };
      return { ...state };
    default:
      return state;
  };
};