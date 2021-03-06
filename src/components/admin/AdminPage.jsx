import { Producto } from '../catalogo/Producto';
import { Modal } from './Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import { pedirProductos } from './../../helpers/pedirProudctos';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux-actions/auth';
import { useNavigate } from "react-router-dom";

export const AdminPage = () => {
 const navigate = useNavigate();
  const dispatch = useDispatch();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    cargarProductos();
  }
  , [productos]);

  const cargarProductos = async () => {
    const productos = await pedirProductos();
     setProductos(productos);
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
    localStorage.removeItem('token');
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <button
            type="button"
            className="btn btn-primary me-5"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Agregar producto
          </button>
          </div>
          <div className="col-md-6">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Cerrar Sesion
          </button>
        </div>
      </div>
      <Modal />
      <div className="row mt-5">
        {productos.map(({ id, nombre, foto, desc }) => (
          <Producto
          id={id}
            key={id}
            nombre={nombre}
            foto={foto}
            desc={desc}
          />
        ))}
      </div>
    </div>
  );
};
