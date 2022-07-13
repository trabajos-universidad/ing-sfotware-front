import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { useForm } from './../../hooks/useForm';
import { startLogin } from '../../Redux-actions/auth';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const initialForm = {
    email: '',
    password: '',
  };

  const [formValues, setForm, reset] = useForm(initialForm);

  const { email, password } = formValues;

  const validations = () => {
    if (email.trim() === '') {
      Swal.fire({
        title: 'Error',
        text: 'El correo es obligatorio',
        icon: 'error',
      });

      return false;
    }
    if (password.trim() === '') {
      Swal.fire({
        title: 'Error',
        text: 'La contraseña es obligatoria',
        icon: 'error',
      });
       return false
    }

    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!validations()){
      return;
    }
    dispatch(startLogin(email, password));

  }
  return (
    <div className="row justify-content-center login">
      <div className="col-md-8 col-md-offset-3">
        <h1 className="mt-5">Login</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="mt-1">Email</label>
            <input
              type="email"
              className="form-control mt-1"
              name="email"
              onChange={setForm}
            />
            <label htmlFor="password" className="mt-1">Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              name="password"
              onChange={setForm}
            />
            <input
              type="submit"
              className="btn btn-lg btn-primary mt-3 bg-cafe"
              value="Ingresar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
