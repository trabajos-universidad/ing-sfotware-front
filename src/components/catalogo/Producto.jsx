import { useSelector } from 'react-redux'

export const Producto = ({ nombre, foto, desc}) => {
  const { uid } = useSelector((state) => state.auth);


  return (
    <div className="col-12 col-md-6 col-lg-3 mt-3">
      <div className="card">
        <img
          src={foto}
          alt="logo"
          className="card-img-top"
        />
        <div className="card-body line">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{desc}</p>
        </div>
        {uid ? (
          <button className="btn btn-danger m-3">
            Eliminar producto
          </button>
        ) : null}
      
      </div>
    </div>
  );
};
