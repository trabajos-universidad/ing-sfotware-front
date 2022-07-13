import { Producto } from '../catalogo/Producto';
import { Modal } from './Modal';

export const AdminPage = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Agregar producto
          </button>
        </div>
      </div>
      <Modal/>
      <div className="row">
        {arr.map((item) => (
          <Producto key={item} />
        ))}
      </div>
    </div>
  );
};
