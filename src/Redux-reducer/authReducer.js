import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        user: action.payload,
      };
    case types.logout:
      return {};
    case types.register:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
