import { types } from '../types/types';

export const login = (uid, displayname) => ({
  type: types.login,
  payload: {
    uid,
    displayname,
  },
});

export const logout = () => ({
  type: types.logout,
});

export const startLogin = (email, password) => {
  const data = { email, password };

  return async (dispatch) => {
    const response = await fetch('http://localhost:4000/auth/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const body = await response.json();
    if (body.ok) {
        dispatch(login(body.uid, body.name));
    }
  };
};
