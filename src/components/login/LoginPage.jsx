export const LoginPage = () => {
  return (
    <div className="row justify-content-center login">
      <div className="col-md-8 col-md-offset-3">
        <h1 className="mt-5">Login</h1>
        <form className="form">
          <div className="form-group">
            <label htmlFor="email" className="mt-1">Email</label>
            <input
              type="email"
              className="form-control mt-1"
              id="email"
            />
            <label htmlFor="password" className="mt-1">Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              id="password"
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
