import {SET_ACCESS_TOKEN, SET_USER} from 'redux/actions/types';
import {AuthState} from 'interfaces/auth';

const initialStateAuth: AuthState = {
  accessToken: '',
  user: null,
};

const authReducer = (
  state = initialStateAuth,
  action: {type: string; payload: never},
) => {
  const {type, payload} = action;
  switch (type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: payload,
      };
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
