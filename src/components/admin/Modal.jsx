import { useForm } from './../../hooks/useForm';
import { useRef } from 'react';
import { uploadFiles } from './../../helpers/uploadFiles';
import { agregarProducto } from '../../helpers/agregarProducto';

export const Modal = () => {
  const fileInputRef = useRef();
  const initialForm = {
    nombre: '',
    desc: '',
  };
  const [formValues, onChange, reset] = useForm(initialForm);
  const { nombre, desc } = formValues;

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) {
      return;
    }


    const file = target.files[0];

    fileInputRef.current = file;

  };

  const handleSubmit =  async(e) => {
    e.preventDefault();

    const url = await uploadFiles(fileInputRef.current);

    const producto = {
        nombre,
        desc,
        foto: url
    }

    await agregarProducto(producto);

  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Agregar producto
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group my-3">
                <input
                  type="file"
                  className="form-control"
                  placeholder="Foto"
                  ref={fileInputRef}
                  name="foto"
                  onChange={onFileInputChange}
                />
              </div>
              <div className="form-group my-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="nombre"
                  onChange={onChange}
                />
              </div>
              <div className="form-group my-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Descripcion"
                  name="desc"
                  onChange={onChange}
                />
                <input type="submit" value="Agregar" className='btn btn-pimary bg-cafe mt-3 text-white' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
