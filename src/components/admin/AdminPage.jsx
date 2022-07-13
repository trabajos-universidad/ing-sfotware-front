import { Producto } from "../catalogo/Producto";

export const AdminPage = () => {
  const arr = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <button className="btn btn-primary m-3">Agregar producto</button>
        </div>
        <div className="col-md-6">
        <button className="btn btn-danger m-3">Eliminar producto</button>
        </div>
        </div>
      <div className="row">
          {
            arr.map(item => (
              <Producto key={item} />
            ))
          }
      </div>
    </div>
  )
}
