import { types } from '../types/types';
import Swal from 'sweetalert2';

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
    const response = await fetch('https://ing-software-work.herokuapp.com/auth/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const body = await response.json();

    if (!body.ok) {
      return Swal.fire({
        title: 'Error',
        text: body.msg,
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    localStorage.setItem('token', body.token);
    dispatch(login(body.uid, body.name));
  };
};
