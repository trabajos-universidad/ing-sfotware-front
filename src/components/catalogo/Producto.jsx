export const Producto = () => {
  return (
    <div className="col-12 col-md-6 col-lg-3 mt-3">
      <div className="card">
        <img
          src="./imgs/producto.jpg"
          alt="logo"
          className="card-img-top"
        />
        <div className="card-body line">
          <h5 className="card-title">Nombre del producto</h5>
          <p className="card-text">Descripcion</p>
        </div>
      </div>
    </div>
  );
};
