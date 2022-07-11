export const Footer = () => {
  return (
    <div className="footer mt-5">
      <div className="row">
        <div className="col-12">
          <img
            src="./imgs/logo.png"
            alt="logo"
            className="logo-footer img-fluid"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 line">
          <p className="text-white icons">
            <a href="https://www.instagram.com/artymad.pyme/" target="_blank" className="fa-brands fa-instagram size mt-1 mx-3"></a>
            <a className="fa-brands fa-whatsapp size mt-1 mx-3"></a>
          </p>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-white icons">
              © 2020 Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
