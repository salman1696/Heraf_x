import {AUTH_LOADING, AUTH_FAILED} from '../actions/auth';
import {MOBILE} from '../actions/types';

const initialState = {
  isLoggedIn: false,
  storeMobiles: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  errMsg: null,
};

export const authReducer = (state = initialState, action: { type: any; payload: { message: any; }; }) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        errMsg: null,
      };
    case AUTH_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        errMsg: action.payload,
      };
    case MOBILE:
      return {
        ...state,
        storeMobiles: action.payload,
        message: action.payload.message,
        isLoggedIn: true,
        isLoading: false,
        isSuccess: true,
        isError: false,
        errMsg: null,
      };

    default:
      return state;
  }
};
