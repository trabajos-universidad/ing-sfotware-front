import { useSelector } from 'react-redux'
import Swal from 'sweetalert2';

export const Producto = ({ id, nombre, foto, desc}) => {
  const { uid } = useSelector((state) => state.auth);

  const handleClickDeleteproduct = async() => {

    const resp = await fetch(`https://ing-software-work.herokuapp.com/productos/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await resp.json();
     if(!data.ok) {
      return Swal.fire({
        title: 'Error',
        text: data.message,
        icon: 'error',
      });
     }
      Swal.fire({
        title: 'Eliminado',
        text: 'Producto eliminado correctamente',
        icon: 'success',
      });

    }

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
          <button className="btn btn-danger m-3" onClick={handleClickDeleteproduct}>
            Eliminar producto
          </button>
        ) : null}
      
      </div>
    </div>
  );
};
