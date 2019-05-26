import state from 'store/state/auth';

const initialState = state;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_REQUEST':
      return { ...state, [action.payload.key]: { status: 'loading', data: null, error: null } };
    case 'AUTH_SUCCESS':
      return { ...state, [action.payload.key]: { status: 'success', data: action.payload.data, error: null } };
    case 'AUTH_ERROR':
      return { ...state, [action.payload.key]: { status: 'error', data: null, error: action.payload.error || 'UnknownError' } };
    case 'AUTH_RESET':
      return { ...state, [action.payload.key]: { status: '', data: null, error: state[action.payload.key].error } };
    default:
      return state;
  };
};