import { types } from '../types/types';

const initialState = {
  uid: null,
  displayname: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        ...action.payload,
      };
    case types.logout:
      return {};
    case types.register:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
